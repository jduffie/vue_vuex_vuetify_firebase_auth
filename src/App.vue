<template>
    <v-app id="inspire">
        <v-navigation-drawer
                :clipped="$vuetify.breakpoint.lgAndUp"
                app
                v-model="drawer"
        >
            <v-list dense>
                <template v-for="item in items">
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
            <v-toolbar-title>Dev Meetup</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-xs-only" >
                <v-btn text v-for="item in bannerItems" :key="item.text">
                    <v-icon left>{{item.icon}}</v-icon>
                  {{item.text}}
                </v-btn>
            </v-toolbar-items>
        </v-app-bar>

        <v-main>
            <v-container
                    class="fill-height"
                    fluid
            >
                <v-row
                        align="center"
                        justify="center"
                >
                    <v-col class="text-center">
                        <v-tooltip left>
                            <template v-slot:activator="{ on }">
                                <v-btn
                                        :href="source"
                                        icon
                                        large
                                        target="_blank"
                                        v-on="on"
                                >
                                    <v-icon large>mdi-code-tags</v-icon>
                                </v-btn>
                            </template>
                            <span>Source</span>
                        </v-tooltip>
                    </v-col>
                </v-row>
            </v-container>
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
                {icon: 'mdi-calendar', text: 'View Meetups'},
                {icon: 'mdi-account-box', text: 'Profile'},
                {icon: 'mdi-account-plus', text: 'Sign up'},
                {icon: 'mdi-account-box-outline', text: 'Sign in'}
            ],
            items: [
                {icon: 'mdi-calendar', text: 'View Meetups'},
                {icon: 'mdi-table-edit', text: 'Organize Meetup'},
                {icon: 'mdi-account-box', text: 'Profile'},
                {icon: 'mdi-account-plus', text: 'Sign up'},
                {icon: 'mdi-account-box-outline', text: 'Sign in'},
                {icon: 'mdi-contacts', text: 'Contacts'},
                {icon: 'mdi-history', text: 'Frequently contacted'},
                {icon: 'mdi-content-copy', text: 'Duplicates'},
                {
                    icon: 'mdi-chevron-up',
                    'icon-alt': 'mdi-chevron-down',
                    text: 'Labels',
                    model: true,
                    children: [
                        {icon: 'mdi-plus', text: 'Create label'},
                    ],
                },
                {
                    icon: 'mdi-chevron-up',
                    'icon-alt': 'mdi-chevron-down',
                    text: 'More',
                    model: false,
                    children: [
                        {text: 'Import'},
                        {text: 'Export'},
                        {text: 'Print'},
                        {text: 'Undo changes'},
                        {text: 'Other contacts'},
                    ],
                },
                {icon: 'mdi-cog', text: 'Settings'},
                {icon: 'mdi-message', text: 'Send feedback'},
                {icon: 'mdi-help-circle', text: 'Help'},
                {icon: 'mdi-cellphone-link', text: 'App downloads'},
                {icon: 'mdi-keyboard', text: 'Go to the old version'},
            ],
        })
    });
</script>
