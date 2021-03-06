import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loadedMeetups: [
      { imageUrl: 'http://localhost/a', title: 'Meetup in New York', id: 'asdfafdad', date: '2020-09-01'},
      { imageUrl: 'http://localhost/b', title: 'Meetup in Paris', id: 'asfdad', date: '2020-08-05'},
    ],
    user: null

  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
    }
  },
  actions: {
    signUserUp: function ({commit}, payload) {
      firebase.auth()
          .createUserWithEmailAndPassword(payload.email, payload.password)
          .then(
              userCredential => {
                if (userCredential.user !== null) {
                  const newUser = {
                    id: userCredential.user.uid,
                    registeredMeetups: []
                  }
                  commit('setUser', newUser)
                }
              },
          )
          .catch(error => {
            console.log(error)
          })
    },
    signUserIn: function ({commit}, payload) {
      firebase.auth()
          .signInWithEmailAndPassword(payload.email, payload.password)
          .then(
              userCredential => {
                if (userCredential.user !== null) {
                  const setUser = {
                    id: userCredential.user.uid,
                    registeredMeetups: []
                  }
                  commit('setUser', setUser)
                }
              },
          )
          .catch(error => {
            console.log(error)
          })


    }
  },
  modules: {
  },
  getters: {
    loadedMeetups(state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        if (meetupA.date > meetupB.date) {
          return 1;
        }
        return -1;
      })
    },
    featuredMeetups(state, getters) {
      return getters.loadedMeetups.slice(0, 5);
    },
    loadedMeetup(state) {
      return (meetupId: string) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId;
        })

      }
    },
    user (state) {
      return state.user
    }
  }
})
