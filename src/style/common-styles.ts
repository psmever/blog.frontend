import tw, { styled } from 'twin.macro';
import { StyleSizeType, StyleFontWeightType } from '@/Types';

export const ContainerStyle = {
    DefaultContainer: tw.div`flex h-screen items-center justify-center`
};

export const WapperStyle = {
    FlexWapper: tw.div`flex`,
    FlexColWapper: tw.div`flex flex-col`,
    FlexNoWrapGap2: tw.div`flex flex-nowrap gap-2`,
    FlexNoWrapCenterGap2: tw.div`flex flex-nowrap w-full items-center justify-center gap-2`
};

export const SpanStyle = {
    Span: styled.span(({ TextSize, FontWeight }: { TextSize: StyleSizeType; FontWeight: StyleFontWeightType }) => {
        const twStyled = [];

        if (TextSize === `5xl`) {
            twStyled.push(tw`text-5xl`);
        } else {
            twStyled.push(tw`text-xs`);
        }

        if (FontWeight === `extrabold`) {
            twStyled.push(tw`font-extrabold`);
        } else {
            twStyled.push(tw`font-normal`);
        }

        return twStyled;
    }),
    SrOnlySpan: tw.span`sr-only`
};

export const IconStyle = {
    IconWapper: tw.div`flex`,
    IconSpinerSvg: tw.svg`inline w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600`,
    IconSpinerSmallSvg: tw.svg`inline w-4 h-4 me-3 text-white animate-spin`,
    IconSvg: styled.svg(({ IconSize }: { IconSize: StyleSizeType }) => {
        const twStyled = [];

        if (IconSize === `sm`) {
            twStyled.push(tw`w-5 h-5`);
        } else if (IconSize === `xs`) {
            twStyled.push(tw`w-4 h-4`);
        } else {
            twStyled.push(tw`w-6 h-6`);
        }

        return twStyled;
    })
};

export const ButtonStyle = {
    Button: styled.button(() => {
        const twStyled = [
            tw`w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`
        ];

        return twStyled;
    })
};

export const SystemNoticeBoxStyle = {
    BoxWapper: tw.div`flex bg-indigo-900 text-center p-2 sticky top-0 z-50`,
    ContentsWapper: tw.div`grow items-center`,
    ContentsBox: tw.div`flex flex-col items-center text-indigo-100 space-y-2`,
    TitleSpan: tw.span`flex rounded-full bg-indigo-500 text-xs font-bold px-3`,
    ContentsSpan: tw.span`flex text-left`,
    ContentsCover: tw.div`text-little break-words whitespace-pre-line`,
    ButtonWapper: tw.div`flex items-start`,
    ButtonCover: tw.div`bg-indigo-800 items-center text-indigo-100 leading-none flex cursor-pointer`
};

export const PostLayoutStyle = {
    MainContainer: tw.main`flex flex-col min-h-screen w-full`,
    Header: tw.header`flex w-full p-0 sticky top-0 z-50`,
    NavContainer: tw.nav`flex w-full border border-gray-200 bg-indigo-200 dark:bg-gray-800 dark:border-gray-700 items-center justify-center`,
    NavWapper: tw.div`flex flex-wrap w-full md:max-w-7xl items-center justify-between p-4`,
    LogoDivision: tw.div`flex`,
    LogoWapper: tw.div`flex items-center space-x-3 rtl:space-x-reverse`,
    LogoText: tw.span`self-center text-2xl font-semibold whitespace-nowrap dark:text-white`,
    MenuDivision: tw.div`flex items-center justify-between`,
    HambergerButtonArea: tw(WapperStyle.FlexWapper)``,
    HambergerButton: tw.button`inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600`,
    MenuButtonArea: tw.div`hidden w-full md:flex md:w-auto gap-2`,
    MenuButtonItem: tw.button`flex py-1 px-2 bg-blue-500 dark:bg-blue-600 hover:dark:bg-gray-700 dark:dark:bg-transparent hover:bg-blue-700 text-white font-semibold rounded gap-1 items-center justify-center`,
    SectionWapper: tw.section`flex-1 bg-indigo-50 dark:bg-gray-700 p-2`,
    FooterWapper: tw.footer`flex border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700`,
    FooterArea: tw(WapperStyle.FlexNoWrapCenterGap2)``,
    FooterTextItem: tw.span`block py-5 text-sm text-gray-500 sm:text-center dark:text-gray-400`,
    FooterUnderLine: tw.span`hover:underline`
};

export const PostPageStyle = {
    PostContainer: tw.div`mb-20`,
    PostWapper: tw.div`max-w-screen-2xl mx-auto md:p-5`,
    PostItemWapper: tw.div`grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-3`,
    PostArticle: tw.article`rounded overflow-hidden shadow-lg`,
    PostListBox: tw.div`bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700`,
    PostImageArea: tw.div`flex w-full`,
    PostImage: tw.img`object-cover rounded-lg w-full`,
    PostContentArea: tw.div`p-5`,
    PostTitle: tw.h5`mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white`,
    PostContent: tw.p`mb-3 font-normal text-gray-700 dark:text-gray-400`
};

export const ManageLayoutStyle = {
    MainContainer: tw.main`flex-1 bg-indigo-50 dark:bg-gray-700`
};

export const ManageLoginPageStyle = {
    MainContainer: tw.div`bg-gray-50 dark:bg-gray-900`,
    MainWapper: tw.div`flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0`,
    LoginWapper: tw.div`w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800`,
    LoginBox: tw.div`p-6 space-y-4 md:space-y-6 sm:p-8`,
    TitleDivision: tw.div`flex justify-center`,
    LoginTitle: tw.h1`text-sm md:text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white`,
    LoginForm: tw.form`space-y-4 md:space-y-4`,
    LoginFormRow: tw.div``,
    LoginFormLabel: tw.label`block mb-2 text-sm font-medium text-gray-900 dark:text-white`,
    LoginInput: tw.input`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`,
    LoginButton: tw.button`w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`
};

export const ManageLogoutPageStyle = {
    MainContainer: tw.div`bg-gray-50 dark:bg-gray-900`
};

export const LayoutModalStyle = {
    Container: tw.div`relative z-10`,
    FixedOpacity: tw.div`fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity`,
    ModalWapper: tw.div`fixed inset-0 z-10 w-screen overflow-y-auto cursor-pointer`,
    ModalCover: tw.div`flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0`,
    ModalBox: tw.div`relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-full sm:max-w-sm md:max-w-lg dark:bg-gray-700`,
    MessageArea: tw.div`bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`,
    MessageBox: tw.div`sm:flex sm:items-start`,
    MessageCover: tw.div`mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left`,
    MessageWapper: tw.div`mt-2`,
    ModalMessage: tw.p`text-sm text-gray-500 dark:text-white`,
    ButtonArea: tw.div`bg-gray-50 px-4 py-3 flex justify-end dark:bg-gray-700`,
    ModalButton: tw.button`flex w-full md:w-20 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 text-center justify-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`
};
