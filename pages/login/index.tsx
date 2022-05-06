import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Title from "../../components/primitives/text/Title";
import Panel from "../../components/primitives/panel/Panel";
import Button from "../../components/primitives/button/Button";
import Navbar from "../../components/navbar/Navbar";
import { useForm } from "react-hook-form";
import { styled } from "../../stitches.config";

const Form = styled('form');
const Input = styled('input');

type FormType = {
    username?: string,
    password?: string,
}

const AboutPage: NextPage = ({ planet }: any) => {
    const { back } = useRouter();

    const { register, handleSubmit, formState: { errors } } = useForm<FormType>();

    function login(data: any) {
        console.log(data);
    }

    return (
        <Panel css={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            backgroundColor: '$gray5'
        }}>
            <Form css={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start',
                justifyContent: 'center',
                backgroundColor: '$gray1',
                p: '$3',
            }} onSubmit={handleSubmit(login)}>
                <Title css={{mb: '$3'}}>Sign In</Title>
                <Input css={{my: '$1'}} {...register('username', { required: true })}
                    type="text"
                    name="username"
                    placeholder="Username" />
                {errors.username && <small>* This is required.</small>}
                <Input css={{my: '$1'}} {...register('password', { required: true })}
                    type="password"
                    name="password"
                    placeholder="Password" />
                {errors.password && <small>* This is required.</small>}
                <Button css={{ mt: '$3' }} type="submit">
                    Login
                </Button>
            </Form>
        </Panel>
    );
};

export default AboutPage;
