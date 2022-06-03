module.exports = {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {

    screens: {
      'xs': '440px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    
    extend: {
      colors: {
        black: "#1C1B20",
        gray: "#D9D9D9",
        blue: "#36BCD1",
        purplec: "#933EBB",
        yellows: "#F2D852",

      },
      fontFamily: {
        pacifica: ['Caesar Dressing', 'cursive']
      },

      keyframes: {
        wiggle: {
            from: {
                transform: 'rotate(0deg)'
            },
            to: {
              transform: 'rotate(360deg)'
            },
        }
      },
      animation: {
        wiggle: 'wiggle 7s linear infinite',
      }
    },
  },
  plugins: [require("daisyui")],
  
}