import {createTheme} from '@mui/material/styles';

const colors = {
    primary: '#d5d5d7',
    secondary: '#cecece'
}


export const globalTheme = createTheme({
    components: {
        MuiButton: {
            defaultProps: {
              disableElevation: true,
              disableRipple: true, // No more ripple!
            },
            // styleOverrides: {
            //   containedPrimary: {
            //     backgroundColor: 'red'
            //   },
            // },
            variants: [
              {
                props: { variant: 'addButton' },
                style: {
                  backgroundColor: colors.primary,
                  borderRadius: 25,
                  border: '1px solid #a19f9f',
                  color: '#000',
                },
              },
            ],
          },
    }
})