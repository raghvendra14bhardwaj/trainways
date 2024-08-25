import { createTheme } from "@mui/material";


const baseTheme= createTheme({
    typography:{
        fontFamily:"roboto",
        fontWeightLight: 400,
        fontWeightMedium:500,
        fontWeightBold:700    }
})

export const lightTheme= createTheme({
    ...baseTheme,
    palette:{
        primary:{
            main:"#fff",
        },
        mode:"light"
    },
    components:{
        MuiAppBar:{
            styleOverrides:{
                colorPrimary:{
                 background:"#ffffff"
               }
            }
        },
        MuiDrawer:{
            styleOverrides:{
                paper:{
                    background:"#ffffff",
                    color:"#000000"
                }
            }
        }
    }
})