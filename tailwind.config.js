module.exports = {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    
    extend: {
      colors: {
        black: "#1C1B20",
        gray: "#D9D9D9",
        blue: "#36BCD1",
        purplec: "#933EBB"
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
  plugins: [],
  
}