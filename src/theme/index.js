import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";


export const theme = extendTheme({
    fonts: {
        heading : "Ubuntu",
        body: "Ubuntu",
    },
    colors:{
        purple:{
            500:"#5F00D9"
        },
        p:{
            purple:"#5F00D9",
            black:"#171717"
        },
        black:{
            5:"#F3F3F7",
            10:"#EEEEF4",
            20:"#D8DDE2",
            40:"#BABAC4",
            60:"#797E82",
            80:"#535D66",
        }
    },
    textStyles:{
        h1:{
            fontSize:{base:"30px",md:"32px"},

            color:"p.black",
            
            lineHeight:{
                base:"34px",
                md:"36px",
            }
        },
        h2:{
            fontSize:{base:"24px",md:"28px"},

            color:"p.black",
            
            lineHeight:{
                base:"28px",
                md:"32px",
            }
        },

    },
    styles:{
        global:{
            body:{
                bg:"#F3F3F7"
            }
        }
    },
    components:{
        Button:{
            baseStyle:{
                fontWeight:"bold",
                borderRadius:"10px",
            },
        },
    }
},
withDefaultColorScheme({colorScheme:"purple"})
);