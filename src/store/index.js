import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        titleData: ['LET US HELP YOU', 'ABOUT JUMIA', 'MAKE MONEY WITH JUMIA', 'JUMIA INTERNATIONAL'],
        selectedObj: null,
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
          ],
          products:[
            {
                id: 1,
                name: 'Aida TV',
                price: '108,000',
                category: 'Electronics',
                productDetail: 'Samsung Led transform your living room to a theatre with this breath-taking, 32 -inch television, with an ultra-slim profile and exquisite design. Watch your favorite films and music come to life with its cutting-edge LED display that enables you to watch content in full high definition, the integrated channel speakers allow you to hear every little detail in whatever you choose to watch or listen to. ',
                imageLink: [
                    require('../assets/aida-44-inch.jpg'),
                    require('../assets/aida1.jpg'),
                    require('../assets/aida2.jpg'),
                    require('../assets/aida3.jpg')
                ],
                categoryId: 3
            },
            {
                id: 2,
                name: 'Bensoni TV',
                price: '150,000',
                category: 'Electronics',
                productDetail: 'Samsung Led transform your living room to a theatre with this breath-taking, 32 -inch television, with an ultra-slim profile and exquisite design. Watch your favorite films and music come to life with its cutting-edge LED display that enables you to watch content in full high definition, the integrated channel speakers allow you to hear every little detail in whatever you choose to watch or listen to. ',
                imageLink: [
                    require('../assets/bensoni-hd.jpg'),
                    require('../assets/bensoni-hd1.jpg'),
                    require('../assets/bensoni-hd1.jpg'),
                    require('../assets/bensoni-hd.jpg')
                ],
                categoryId: 3
            },
            {
                id: 3,
                name: 'Heward-Mills',
                price: '15,000',
                category: 'Best Seller',
                productDetail: 'Bishop Dag Heward-Mills, an exceptional Christian leader, reveals one of his secrets: "If anyone were to ask me what the greatest secret of my relationship with God is, I would say, without hesitation, that it is the power of the quiet times I have with Him everyday." He has decided to write this book',
                imageLink: [
                    require('../assets/books.jpg'),
                    require('../assets/books1.jpg'),
                    require('../assets/books2.jpg'),
                    require('../assets/books3.jpg')
                ],
                categoryId: 6
            },
            {
                id: 4,
                name: 'Loung Chair',
                price: '40,999',
                category: 'Furniture',
                productDetail: 'Our Banquet Chair comes with Aluminum Gold Frame with Blue Pokerdot fabric 25mm aluminum frame,Aluminum tube 25x25 mm with thickness 2.2mm.  Chromed to be painting  scratch and rust resistance, Height to top: 94cm, Width: 43cm, Depth: 41cm, Height to seat: 47cm, Weight: 7.5Kg.These are small size chair.',
                imageLink: [
                    require('../assets/field-loung-chair.jpg'),
                    require('../assets/loung-chair1.jpg'),
                    require('../assets/lounge-chair2.jpg'),
                    require('../assets/lounge-chair3.jpg')
                ],
                categoryId: 4
            },
            {
                id: 5,
                name: 'Gass Stove',
                price: '60,999',
                category: 'Kitchen',
                productDetail: 'The product information goes here',
                imageLink: [
                    require('../assets/gass-stove.jpg'),
                    require('../assets/gass-stove1.jpg'),
                    require('../assets/gass-stove2.jpg'),
                    require('../assets/gass-stove3.jpg')
                ],
                categoryId: 4
            },
            {
                id: 6,
                name: 'Imose',
                price: '67,999',
                category: 'Mobile phone',
                productDetail: 'Samsung Led transform your living room to a theatre with this breath-taking, 32 -inch television, with an ultra-slim profile and exquisite design. Watch your favorite films and music come to life with its cutting-edge LED display that enables you to watch content in full high definition, the integrated channel speakers allow you to hear every little detail in whatever you choose to watch or listen to. ',
                imageLink: [
                    require('../assets/imose-kampe.jpeg'),
                    require('../assets/imose-kampe1.jpg'),
                    require('../assets/imose-kampe2.jpg'),
                    require('../assets/imose-kampe2.jpg')
                ],
                categoryId: 1
            },
            {
                id: 7,
                name: 'Old Books',
                category: 'Best sellers',
                price: '50,999',
                productDetail: 'Bishop Dag Heward-Mills, an exceptional Christian leader, reveals one of his secrets: "If anyone were to ask me what the greatest secret of my relationship with God is, I would say, without hesitation, that it is the power of the quiet times I have with Him everyday." He has decided to write this book',
                imageLink: [
                    require('../assets/old-books.jpg'),
                    require('../assets/books1.jpg'),
                    require('../assets/books2.jpg'),
                    require('../assets/books3.jpg')
                ],
                categoryId: 6
            },
            {
                id: 8,
                name: 'Phone',
                price: '180,999',
                category: 'Mobile phone',
                productDetail: ' The handset is powered by the in-house HiSilicon Kirin 710 chipset coupled with ARM Mali-G51 MP4 GPU. It comes in two variants – 4GB RAM + 64GB and 4GB RAM + 128GB storage. The handset runs on EMUI 9.0 based on Android 9.0 Pie out of the box. There is a rear-mounted fingerprint sensor for biometric security. ',
                imageLink: [
                    require('../assets/phone1.jpg'),
                    require('../assets/phone2.jpg'),
                    require('../assets/phone3.jpg'),
                    require('../assets/phone4.jpg')
                ],
                categoryId: 1
            },
            {
                id: 9,
                name: 'Samsung',
                price: '77,999',
                category: 'Mobile phone',
                productDetail: 'Samsung Led transform your living room to a theatre with this breath-taking, 32 -inch television, with an ultra-slim profile and exquisite design. Watch your favorite films and music come to life with its cutting-edge LED display that enables you to watch content in full high definition, the integrated channel speakers allow you to hear every little detail in whatever you choose to watch or listen to. ',
                imageLink: [
                    require('../assets/samsung-galaxy.jpg'),
                    require('../assets/samsung-galaxy1.jpg'),
                    require('../assets/samsung-galaxy2.jpg'),
                    require('../assets/samsung-galaxy3.jpg')
                ],
                categoryId: 2
            },
            {
                id: 10,
                name: 'Turn Chair',
                price: '30,999',
                category: 'Home furniture',
                productDetail: 'Our Banquet Chair comes with Aluminum Gold Frame with Blue Pokerdot fabric 25mm aluminum frame,Aluminum tube 25x25 mm with thickness 2.2mm.  Chromed to be painting  scratch and rust resistance, Height to top: 94cm, Width: 43cm, Depth: 41cm, Height to seat: 47cm, Weight: 7.5Kg.These are small size chair.',
                imageLink: [
                    require('../assets/turn-chair.jpg'),
                    require('../assets/turn-chair1.jpg'),
                    require('../assets/turn-chair2.jpg'),
                    require('../assets/turn-chair3.jpg')
                ],
                categoryId: 2
            },
            {
                id: 11,
                name: 'Ingo Table',
                price: '50,999',
                category: 'Home furniture',
                productDetail: 'Our Banquet Chair comes with Aluminum Gold Frame with Blue Pokerdot fabric 25mm aluminum frame,Aluminum tube 25x25 mm with thickness 2.2mm.  Chromed to be painting  scratch and rust resistance, Height to top: 94cm, Width: 43cm, Depth: 41cm, Height to seat: 47cm, Weight: 7.5Kg.These are small size chair.',
                imageLink: [
                    require('../assets/ingo-table.jpg'),
                    require('../assets/ingo-table1.jpg'),
                    require('../assets/ingo-table2.jpg'),
                    require('../assets/ingo-table3.jpg')
                ],
                categoryId: 6
            }
        ]
    },
    mutations: {
        setSelectedObj(state, payload){
            state.selectedObj = payload;
        }
    }
})