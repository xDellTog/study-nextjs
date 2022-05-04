import Panel from "../primitives/panel/Panel";
import {styled} from "../../stitches.config";

const Navbar = styled('nav', {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '$gray2',
    alignItems: 'center',
    justifyContent: 'space-between',
    p: '$1'
});

export default Navbar;
