import type { NextPage } from 'next';
import { Button } from '../components/button/Button';
import useThemeContext from '../hooks/useThemeContext';
import { lightTheme } from '../stitches.config';

const Home: NextPage = () => {
    const { theme, toggleTheme } = useThemeContext();

    function goTo(page: any) {
        window.location = page;
    }

    return (
        <div>
            <h1>Home</h1>

            <Button color="secondary" onClick={() => goTo('/about')}>
                About Page
            </Button>
            <Button color="primary" onClick={() => toggleTheme()}>
                {(theme === lightTheme) ? 'Light' : 'Dark'} Theme
            </Button>
        </div>
    );
};

export default Home;
