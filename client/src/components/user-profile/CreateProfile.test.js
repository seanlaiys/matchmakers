import React from 'react';
import CreateProfile from './CreateProfile';
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow} from "enzyme";
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Sinon from 'sinon';
import { createProfile } from '../../actions/profile';

const mockStore = configureMockStore([thunk]);
Enzyme.configure({ adapter: new Adapter() });

describe('Create Profile', () => {
    let store;
    beforeEach(() => {
        store = mockStore({});
    });
    var stubObj = {
        sport: Sinon.stub(),
    };
    it("shallow render", () => {
        const wrapper = shallow(
            <Provider store={store}>
                <CreateProfile createProfile={Sinon.stub()} history={stubObj}/>
            </Provider>
        );
        expect(wrapper).toMatchSnapshot();
    });
    it("integration testing", () => {
        const wrapper = shallow(
            <Provider store={store}>
                <CreateProfile createProfile={createProfile} history={""}/>
            </Provider>
        );
        expect(wrapper).toMatchSnapshot();
    });
    
})