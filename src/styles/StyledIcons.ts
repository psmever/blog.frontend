import styled from 'styled-components'
import { FacebookCircle, Github } from '@styled-icons/boxicons-logos';
import { HomeHeart, Meh } from '@styled-icons/boxicons-solid';
import { Document, ArrowLeft, ArrowRight } from '@styled-icons/heroicons-outline';
import { Heart } from '@styled-icons/entypo/Heart';


export const FacebookIcon = styled(FacebookCircle)`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    list-style: none;
    color: #5469C9;
    text-align: center;
    box-sizing: border-box;
`

export const GithubIcon = styled(Github)`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    list-style: none;
    color: #5469C9;
    text-align: center;
    box-sizing: border-box;
`


export const HomeIcon = styled(HomeHeart)`
    color: #b54930;
    width: 28px;
`

export const PostIcon = styled(Document)`
    color: #b54930;
    width: 28px;
`

export const AboutIcon = styled(Meh)`
    color: #b54930;
    width: 28px;
`

export const ArrowLeftIcon = styled(ArrowLeft)`
    color: #b54930;
    width: 28px;
    position: absolute;
    left: 1rem;
`

export const ArrowRightIcon = styled(ArrowRight)`
    color: #b54930;
    width: 28px;
    position: absolute;
    right: 1rem;
`

export const HeartIcon = styled(Heart)`
    color: #b54930;
    width: 23px;
`