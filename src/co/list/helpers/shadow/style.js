import styled from 'styled-components/native'
import { StyleSheet, Animated, Platform } from 'react-native'

export const Border = styled(Animated.View).attrs({
    elevation: 4
})`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    height: ${StyleSheet.hairlineWidth}px;
    width: 100%;
    background: ${({theme})=>Platform.OS=='android' ? '#00000001' : theme.color.border};
`