import styled from 'styled-components'
import { FacebookCircle, Github } from '@styled-icons/boxicons-logos';
import { HomeHeart, Meh } from '@styled-icons/boxicons-solid';
import { Document, ArrowLeft, ArrowRight } from '@styled-icons/heroicons-outline';
import { Heart } from '@styled-icons/entypo/Heart';
import { Superuser } from '@styled-icons/simple-icons/Superuser';

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

export const ArrowLeftIcon = styled(ArrowLeft)`
    color: #a0a1a7;
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

export const HomeIcon = styled(HomeHeart)`
    color: #a0a1a7;
    width: 1.2rem;
`

export const PostIcon = styled(Document)`
    color: #a0a1a7;
    width: 1.2rem;
`

export const AboutIcon = styled(Meh)`
    color: #a0a1a7;
    width: 1.2rem;
`

export const HeartIcon = styled(Heart)`
    color: #a0a1a7;
    width: 1.2rem;
`

export const SuperuserIcon = styled(Superuser)`
    color: #a0a1a7;
    width: 1.2rem;
`