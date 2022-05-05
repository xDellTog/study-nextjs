import type { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next';
import Button from '../../components/primitives/button/Button';
import Panel from "../../components/primitives/panel/Panel";
import useThemeContext from '../../hooks/useThemeContext';
import { lightTheme } from '../../stitches.config';
import Navbar from "../../components/navbar/Navbar";
import Title from "../../components/primitives/text/Title";
import { useEffect, useState } from "react";
import Content from "../../components/content/Content";
import { useRouter } from 'next/router';

export const getServerSideProps: GetServerSideProps = async ({ query }: GetServerSidePropsContext) => {
    let url = '';
    let pages = 0;
    if ((!!query) && (!!query.page)) {
        pages = parseInt(query.page.toString());
        const params = new URLSearchParams();
        params.append('page', query.page.toString());
        url = `https://swapi.dev/api/planets?${params.toString()}`;
    } else {
        url = 'https://swapi.dev/api/planets';
    }

    const res = await fetch(url);
    const planets = await res.json();

    return {
        props: {
            planets,
            pages
        },
    }
}

const Splash: NextPage = ({ planets, pages }: any) => {
    const { theme, toggleTheme } = useThemeContext();
    const [filteredPlanets, setFilteredPlanets] = useState<any[]>([]);
    const [search, setSearch] = useState<string>('');
    const { push } = useRouter();

    useEffect(() => {
        console.log(pages);
        console.log(Array.from(Array(pages).keys()));
    }, [pages]);

    useEffect(() => {
        console.log(planets);
        if (planets.count > 0) {
            setFilteredPlanets(planets.results);
        }
    }, [planets]);

    useEffect(() => {
        if (search.length >= 3) {
            setFilteredPlanets(planets.results.filter((planet: any) => {
                return planet.name.toLowerCase().includes(search.toLowerCase());
            }));
        } else {
            setFilteredPlanets([...planets.results]);
        }
    }, [search, planets.results]);

    useEffect(() => {
        console.log(filteredPlanets);
    }, [filteredPlanets]);

    function getId(url: string) {
        return url.replace('https://swapi.dev/api/planets/', '').replace('/', '');
    }

    function onChangeSearch(event: any) {
        setSearch(event.target.value);
    }

    return (
        <Panel>
            <Navbar>
                <Title>Star Wars</Title>

                <input type="text"
                    onChange={onChangeSearch}
                    value={search}
                    placeholder="Search" />

                <Button onClick={() => toggleTheme()}>
                    {(theme === lightTheme) ? 'Light' : 'Dark'} Theme
                </Button>
            </Navbar>

            <Content>
                {(filteredPlanets.length > 0) ? (
                    filteredPlanets.map((planet: any, index: number) => (
                        <Panel key={`planet${index}`}
                            css={{
                                p: '$2',
                            }}>
                            <Panel onClick={() => push(`/about/${getId(planet.url)}`)}
                                css={{
                                    p: '$2',
                                    backgroundColor: '$gray2',
                                    cursor: 'pointer'
                                }}>
                                <Title>{planet.name}</Title>
                                <p>Population: {planet.population}</p>
                            </Panel>
                        </Panel>
                    ))
                ) : (
                    <p>No data</p>
                )}
                <Panel css={{
                    display: 'flex',
                    alignItems: "center",
                    justifyContent: "center",
                    py: '$3',
                }}>
                    <Button css={{ mx: '$1' }} disabled={!planets.previous} onClick={() => push(`/home/${getId(planets.previous)}`)}>
                        Previous
                    </Button>
                    {(pages > 1) && (
                        Array.from(Array(pages).keys()).map((item) => (
                            <Button css={{ mx: '$1' }} key={`page_${item + 1}`} onClick={() => push(`/home?page=${item + 1}`)}>
                                {item + 1}
                            </Button>
                        ))
                    )}
                    <Button css={{ mx: '$1' }} disabled={!planets.next} onClick={() => push(`/home/${getId(planets.next)}`)}>
                        Next
                    </Button>
                </Panel>
            </Content>
        </Panel>
    );
};

export default Splash;
