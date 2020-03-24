import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        titleData: ['LET US HELP YOU', 'ABOUT JUMIA', 'MAKE MONEY WITH JUMIA', 'JUMIA INTERNATIONAL'],
        urlData: [
            {
              id: 1,
              path: '#',
              content: [
                'Help Center', 
                'Contact us',
                'How to shop on Jumia?',
                'Delivery options and timelines',
                'How to return a product on Jumia?',
                'Corporate and bulk purchases'
                ]
            },
            {
              id: 2,
              path: '#',
              content: [
                'About us',
                'Jumia careers',
                'Jumia Express',
                'Terms and Conditions',
                'Privacy policy',
                'Tech Week',
                'Jumia Prime',
                'Stay Safe'
              ]
            },
            {
              id: 3,
              path: '#',
              content: [
                'Sell on Jumia',
                'Become an Affiliate Partner',
                'Become a Sales Consultant',
                'Become a Jumia Vendor Service Provider',
                'Become a Logistics Service Partner'
              ]
            },
            {
              id: 4,
              path: '#',
              content: [
                'Algeria',
                'Egypt',
                'Ghana',
                'Ivory Coast',
                'Kenya',
                'Morocco'
              ]
            }
          ]
    },
    mutations: {

    }
})