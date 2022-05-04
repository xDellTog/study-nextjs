import {NextPage} from "next";
import {useRouter} from "next/router";
import {useEffect} from "react";
import Title from "../../components/primitives/text/Title";
import Panel from "../../components/primitives/panel/Panel";
import Button from "../../components/primitives/button/Button";
import {lightTheme} from "../../stitches.config";
import Navbar from "../../components/navbar/Navbar";
import useNavigation from "../../hooks/useNavigation";

export async function getServerSideProps({params}: any) {
    const res = await fetch(`https://swapi.dev/api/planets/${params.id}`);
    const planet = await res.json();

    return {
        props: {
            planet
        },
    }
}

const AboutPage: NextPage = ({planet}: any) => {
    const {back} = useNavigation();

    useEffect(() => {
        console.log(planet);
    }, [planet]);

    return (
        <Panel>
            <Navbar>
                <Panel css={{
                    display: 'flex',
                    alignItems: 'center',
                }}>
                    <Panel>
                        <Button onClick={() => back()}>
                            Back
                        </Button>
                    </Panel>

                    <Title css={{
                        ml: '$2'
                    }}>
                        Star Wars
                    </Title>
                </Panel>
            </Navbar>

            <Title>{planet.name}</Title>
            <p>Population: {planet.population}</p>
        </Panel>
    );
};

export default AboutPage;
