'use client';
import { ManageLoginPageStyle } from '@/Style/common-styles';

const { MainContainer, MainWapper, LoginWapper, LoginBox, TitleDivision, LoginTitle, LoginForm, LoginFormRow, LoginFormLabel, LoginInput, LoginButton } = ManageLoginPageStyle;

export default function LoginPage() {
    return (
        <MainContainer>
            <MainWapper>
                <LoginWapper>
                    <LoginBox>
                        <TitleDivision>
                            <LoginTitle>관리자만 로그인 할수 있습니다.</LoginTitle>
                        </TitleDivision>
                        <LoginForm>
                            <LoginFormRow>
                                <LoginFormLabel>이메일</LoginFormLabel>
                                <LoginInput type="email" placeholder="이메일" />
                            </LoginFormRow>
                            <LoginFormRow>
                                <LoginFormLabel>비밀번호</LoginFormLabel>
                                <LoginInput type="password" placeholder="••••••••" autoComplete="off" />
                            </LoginFormRow>
                            <LoginFormRow>
                                <LoginButton type="button">로그인</LoginButton>
                            </LoginFormRow>
                        </LoginForm>
                    </LoginBox>
                </LoginWapper>
            </MainWapper>
        </MainContainer>
    );
}
