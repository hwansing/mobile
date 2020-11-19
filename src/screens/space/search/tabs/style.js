import styled from 'styled-components'
import SafeAreaView from 'react-native-safe-area-view'
import SegmentedControl from '@react-native-community/segmented-control'

export const Wrap = styled(SafeAreaView).attrs({
    forceInset: {
        vertical: 'never'
    }
})`
    background: ${({theme})=>theme.background.regular};
`

export const Control = styled(SegmentedControl).attrs(({ theme })=>({
    appearance: theme.dark ? 'dark' : 'light',
    fontStyle: {
        fontSize: theme.fontSize.quaternary,
    },
    activeFontStyle: {
        fontSize: theme.fontSize.quaternary,
    }
}))`
    margin: ${({theme})=>theme.padding.small}px ${({theme})=>theme.padding.medium}px;
`

export const Space = styled.View`
    background: ${({theme})=>theme.background.regular};
    height: ${({theme})=>theme.padding.medium}px
`