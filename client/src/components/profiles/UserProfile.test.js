import React from 'react';
import UserProfile from './UserProfile';
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow} from "enzyme";
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Sinon from 'sinon';

const mockStore = configureMockStore([thunk]);
Enzyme.configure({ adapter: new Adapter() });

describe('UserProfiles', () => {
    let store;
    beforeEach(() => {
        store = mockStore({
            auth: {
                sport: 'BASKETBALL',
            },
            chat: {
                sport: 'BASKETBALL',
            },
            profile: {
                sport: 'BASKETBALL',
            }
        });
    });
    var stubObj = {
        sport: Sinon.stub(),
      };
    it("shallow render", () => {
        const wrapper = shallow(
            <Provider store={store}>
                <UserProfile getProfilesById={Sinon.stub()} 
                    authUser={Sinon.stub()} 
                    createChat={Sinon.stub()}
                    auth={stubObj}
                    chat={stubObj}
                    profile={stubObj}
                />
            </Provider>
        );
        expect(wrapper).toMatchSnapshot();
    });
    
})