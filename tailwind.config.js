/** @type {import('tailwind#d6daedcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // theme: {
  //   extend: {
  //     backgroundImage: {
  //       "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
  //       "gradient-conic":
  //         "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
  //     },
  //   },
  // },
  theme: {
    extend: {
      keyframes: {
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        slideInLeft: 'slideInLeft 1s ease-out',
        slideInRight: 'slideInRight 1s ease-out',
      },
      fontFamily:{
        abc:["Poppins","sans-serif"]
      },
      spacing: {
        'wx': '48%',
        'ws': '96%',
        'we': '96%',
        'wt': '38.5%',
        'btn_bt': '99%',
        'wz':'98%',
        "mdw":'54%',
        "fw":"42%",
        "fx":"41%",
        "sb_width":"89%",
        "blogtotip":"450px",
       
        // Cooperative Spacing metrics

        "top_nav_w":'95%',
        // "top_product_section_w":"98%",
        "ptop":"448px",
        "p_inpt_w": "64%",
        "full_width": "100%",

        // media
        "media_t": "266px",
        "resize_prod": "295px",
        "med_b":"350px",

        // add_products_section
        "tw": "94%",
        "pt": "96.5%",
        "text_l": "10%",
        "text_w": "80%",

        // Product category section
        "label_t": "92px",
        // Pricing category
        "price_h":"216px",
        "tax_label": "38%",
        "tax_check_label": "35%",

        // tax top
        'ct':"179px",
        "tr":"44%",
        // button
        "bt":'46%',
        // alot
        "ta": "100%",

        // Existing Products spacing
        'Ep_w':'93%',
        's_Ep':'92%',
        'Ep_m':'2.7%',
        'cw':'49%',
        "ep_t":"300px",

        // Loan request user info
        "lr_t": "336px",
        "date_lr": "432px",
        "lr_inner": "86%",
        "lr_sec_div": "65%",
        "lr_inp": "304px",
        "lr_additional": "356px",
        'lr_yearly': '443px',
        "lr_btns": "493px",
        "lr_body":"530px",
       
        // loan popups
        "dec_pop": "30%",
        "pop_inpt": "97%",
        "resize_w":"90%",

        // hover
        "under_bh":"1px",

        // farmer insurance
        "fi_L":"20%",
        "fi_w": "80%",
        "vt_h":"120%",
        // farmer sell products
        "spw":"78.5%",
        'prod_Img':"30%",
        'farmer_price_box':"263px",

        // Icons section
        "houseIcon": "140px", 
        "dashboard": "204px", 
        "credit": "267px", 
        "shieldIcon": "332px", 
        "storeIcon": "395px",
        "logoutIcon":"460px",
        "smallFF":"70px",
        "supersmallFF":"13.5px",
        "minute":"1px",
      },
      fontFamily:{
        abc:["Poppins","sans-serif"]
      },
      fontSize:{
        "vs": "10px",
        "text_mini": "11px",
        "mid":"15px",

      },
      fontSize:{
        "vs": "10px",

      },
      backgroundImage: theme => ({
        'responsive-bg': "url('/bg.jpg')",
      }),
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '50%': '50%',
        '16': '4rem',
        'responsive': '100% 100%', 
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        // 'zz': { 'max': '767px'},
        'lx':{'max':'1000px'},
        'xb':{'max':'950px'},
        'xs': {'max': '800px'},
        'mx_w': {'max':'605px'},
        'xb':{'max':'950px'},
        'xs': {'max': '800px'},
        'mini_s': {'max':'480px'},
        'very_s': {'max':'350px'},
        'blank': {'max':'200px'},
       
      },
      colors: {
        customGreen: '#57EB98',
        darkerGreen: "#286d34",
        homeText:"#efbe34",
        cardfa:'#52db5a',
        footer:'#195a63',
        oranges:'#fedeb0',
        newBg:"#004953",
        lavender: '',
        card :'#f3f4ff',
        card1 :'#e2f397',
        card2 :'#5aba8a',
        card3 :'#01565b',
        textcolor:'#42526d',
        sidenav:'#42526d',
        buttonhover:'#50627F',
        inputborder:'#6ac8d8'
      },

    },
  },
  plugins: [],
};


