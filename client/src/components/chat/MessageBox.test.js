import React from 'react';
import MessageBox from './MessageBox';
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow } from "enzyme";
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Sinon from 'sinon';
import { getChats } from '../../actions/chat';
import PropTypes from 'prop-types';


const mockStore = configureMockStore([thunk]);
Enzyme.configure({ adapter: new Adapter() });

describe('MessageBox', () => {
    let store;
    beforeEach(() => {
        store = mockStore({
            auth: {
                sport: 'BASKETBALL',
            },
            chat: {
                sport: 'BASKETBALL',
            },
        });
    });
    var stubObj = {
        sport: Sinon.stub(),
      };
      it("shallow render", () => {
        const wrapper = shallow(
            <Provider store={store}>
                <MessageBox auth={stubObj} chat={stubObj} getChats={Sinon.stub()}/>
            </Provider>
        );
        expect(wrapper).toMatchSnapshot();
    });
    it("integration testing", () => {
        const wrapper = shallow(
            <Provider store={store}>
                <MessageBox auth={PropTypes.auth} chat={PropTypes.chat} getChats={getChats}/>
            </Provider>
        );
        expect(wrapper).toMatchSnapshot();
    });

})