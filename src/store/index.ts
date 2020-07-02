import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loadedMeetups: [
      { imageUrl: 'http://localhost/a', title: 'Meetup in New York', id: 'asdfafdad', date: '2020-09-01'},
      { imageUrl: 'http://localhost/b', title: 'Meetup in Paris', id: 'asfdad', date: '2020-08-05'},
    ],
    user: {
      id: 'alksdjfa;lksjdf',
      registeredMeetups: [ 'asfdad']
    }
  },
  mutations: {
  },
  actions: {
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
    }
  }
})
