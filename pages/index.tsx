import type {NextPage} from 'next';
import {Button} from '../components/button/Button';
import useThemeContext from '../hooks/useThemeContext';
import {lightTheme, styled} from '../stitches.config';

const Panel = styled('div');

const Home: NextPage = () => {
    const {theme, toggleTheme} = useThemeContext();

    function goTo(page: any) {
        window.location = page;
    }

    return (
        <div>
            <h1>Home</h1>

            <Button color="primary" onClick={() => toggleTheme()}>
                {(theme === lightTheme) ? 'Light' : 'Dark'} Theme
            </Button>

            <Button onClick={() => goTo('/about')}>
                About page
            </Button>
        </div>
    );
};

export default Home;
