import {render, screen} from '../../test-utils';
import { Users } from './Users';

describe('Users',()=>{
    test('users-rendered-correctly',async ()=>{
        render(<Users/>);
        const usersList = await screen.findAllByRole('listitem');
        expect(usersList).toHaveLength(3);
    })
})