<template>
    <v-app id="inspire">
        <v-navigation-drawer
                :clipped="$vuetify.breakpoint.lgAndUp"
                app
                v-model="drawer"
        >
            <v-list dense>
                <template
                        v-for="item in drawerItems"
                >
                    <v-row
                            :key="item.heading"
                            align="center"
                            v-if="item.heading"
                    >
                        <v-col cols="6">
                            <v-subheader v-if="item.heading">
                                {{ item.heading }}
                            </v-subheader>
                        </v-col>
                        <v-col
                                class="text-center"
                                cols="6"
                        >
                            <a
                                    class="body-2 black--text"
                                    href="#!"
                            >EDIT</a>
                        </v-col>
                    </v-row>
                    <v-list-group
                            :key="item.text"
                            :prepend-icon="item.model ? item.icon : item['icon-alt']"
                            append-icon=""
                            v-else-if="item.children"
                            v-model="item.model"
                    >
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>
                                    {{ item.text }}
                                </v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item
                                :key="i"
                                link
                                v-for="(child, i) in item.children"
                                router
                                v-bind:to="child.link"
                        >
                            <v-list-item-action v-if="child.icon">
                                <v-icon>{{ child.icon }}</v-icon>
                            </v-list-item-action>
                            <v-list-item-content>
                                <v-list-item-title>
                                    {{ child.text }}
                                </v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-group>
                    <v-list-item
                            :key="item.text"
                            link
                            v-else
                            router
                            v-bind:to="item.link"
                    >
                        <v-list-item-action>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>
                                {{ item.text }}
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </template>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar
                app
                color="indigo"
                dark
                dense
        >
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-sm-and-up"></v-app-bar-nav-icon>
            <v-toolbar-title><router-link to="/" tag="span" style="cursor: pointer">Dev Meetup</router-link></v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-xs-only" >
                <v-btn text v-for="item in bannerItems" :key="item.text"
                       router
                       v-bind:to="item.link">
                    <v-icon left>{{item.icon}}</v-icon>
                  {{item.text}}
                </v-btn>
            </v-toolbar-items>
        </v-app-bar>

        <v-main>
          <router-view></router-view>

        </v-main>
        <v-footer
                app
                color="indigo"
        >
            <span class="white--text">&copy; {{ new Date().getFullYear() }}</span>
        </v-footer>
    </v-app>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
        name: 'App',
        props: {
            source: String
        },
        data: () => ({
            drawer: null,
            bannerItems: [
                {icon: 'mdi-calendar', text: 'View Meetups', link: '/meetups'},
                {icon: 'mdi-account-box', text: 'Profile', link: '/profile'},
                {icon: 'mdi-account-plus', text: 'Sign up', link: '/signup'},
                {icon: 'mdi-account-box-outline', text: 'Sign in', link: '/signin'}
            ],
            drawerItems: [
                {icon: 'mdi-calendar', text: 'View Meetups', link: '/meetups' },
                {icon: 'mdi-table-edit', text: 'Organize Meetup', link: '/meetups/new'},
                {icon: 'mdi-contacts', text: 'Contacts', link: '/about'},
                {icon: 'mdi-history', text: 'History', link: '/about'},
                {
                    icon: 'mdi-chevron-up',
                    'icon-alt': 'mdi-chevron-down',
                    text: 'Labels',
                    model: true,
                    children: [
                        {icon: 'mdi-plus', text: 'Create label', link: '/about'},
                    ],
                },
                {
                    icon: 'mdi-chevron-up',
                    'icon-alt': 'mdi-chevron-down',
                    text: 'More',
                    model: false,
                    children: [
                        {text: 'Import', link: '/about'},
                        {text: 'Export', link: '/about'},
                        {text: 'Print', link: '/about'},
                        {text: 'Undo changes', link: '/about'},
                        {text: 'Other contacts', link: '/about'},
                    ],
                },
                {icon: 'mdi-cog', text: 'Settings', link: '/about'},
                {icon: 'mdi-message', text: 'Send feedback', link: '/about'},
                {icon: 'mdi-help-circle', text: 'Help', link: '/about'},
                {icon: 'mdi-cellphone-link', text: 'App downloads', link: '/about'}
            ],
        })
    });
</script>
