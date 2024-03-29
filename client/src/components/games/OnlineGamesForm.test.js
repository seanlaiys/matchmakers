import React from 'react';
import OnlineGamesForm from './OnlineGamesForm';
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow} from "enzyme";
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Sinon from 'sinon';
import { createGame } from '../../actions/game';

const mockStore = configureMockStore([thunk]);
Enzyme.configure({ adapter: new Adapter() });

describe('Online Games Form', () => {
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
                <OnlineGamesForm createGame={Sinon.stub()} history={stubObj}/>
            </Provider>
        );
        expect(wrapper).toMatchSnapshot();
    });
    it("integration testing", () => {
        const wrapper = shallow(
            <Provider store={store}>
                <OnlineGamesForm createGame={createGame} history={""}/>
            </Provider>
        );
        expect(wrapper).toMatchSnapshot();
    });
    
})