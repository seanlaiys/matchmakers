import React from 'react';
import SportsForm from './SportsForm';
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow} from "enzyme";
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Sinon from 'sinon';

const mockStore = configureMockStore([thunk]);
Enzyme.configure({ adapter: new Adapter() });

describe('Sports Form', () => {
    let store;
    beforeEach(() => {
        store = mockStore({});
    });
    it("renders component", () => {
        const wrapper = shallow(
            <Provider store={store}>
                <SportsForm createGame={Sinon.spy()}/>
            </Provider>
        );
        expect(wrapper).toMatchSnapshot();
    });
    
})