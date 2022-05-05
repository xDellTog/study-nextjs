import { useEffect } from "react";
import { useRouter } from 'next/router';
import type { NextPage } from 'next';
import Panel from "../components/primitives/panel/Panel";

const Splash: NextPage = () => {
    const { push } = useRouter();

    useEffect(() => {
        push('/home');
    }, []);

    return (
        <Panel css={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            Loading...
        </Panel>
    );
};

export default Splash;
