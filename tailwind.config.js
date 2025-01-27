/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        customColor:'#172A50',
        customGray: '#444444', // Define your custom color here

        customText: {
          primary: '#324A6D',   // Dark gray
          secondary: '#1C244B', // Medium gray
          accent: '#FFFFFF',    // Red

        },
        color:{
          'sky-blue':'#5FB8F9',
          'sky-transparend':'#FFFFFF26',
          'border-color':'#FFFFFF36',
          "sky-light":'#EEF8FF',
          "sky-blue-light":"#F1F9FF",
          'gray-light':'rgb(234 234 234)',
          'gray-lig':'#F6F6F6'
        
        }

      },
      height: {
        'h-100': '80px',
        'f-18':'18px',
        '2.2':'2px',
        'f55':'55px'
      },
      padding: {
        '1.1':'1px'
      },
      width:{
         'w-152':'152px',
         'w-33':'33%'
      },
      lineHeight: {
         'f55':'55px',
         'f28':'28.8px',
         'f36':'36px',
         'f25':'25px',
         'f43':'43px'
      },
      fontSize: {
        'f39':'39px',
        'f24':'24px',
        'f25':'25px',
        'f15':'15px',
        'f31':'31px',
        'f16':'16px',
        'f28':'28px',
        'f13':'13px'
      },
    },
  },
  plugins: [],
}
