import React from 'react';
import Games from './Games';
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow } from "enzyme";
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Sinon from 'sinon';

const mockStore = configureMockStore([thunk]);
Enzyme.configure({ adapter: new Adapter() });

describe('Games', () => {
    let store;
    beforeEach(() => {
        store = mockStore({
            auth: {
                sport: 'BASKETBALL',
            },
            game: {
                sport: 'BASKETBALL',
            },
        });
    });
    var spyObj = {
        sport: Sinon.spy(),
      };
    it("renders component", () => {
        const wrapper = shallow(
            <Provider store={store}>
                <Games auth={spyObj} game={spyObj} games={spyObj}/>
            </Provider>
        );
        expect(wrapper).toMatchSnapshot();
    });
    
})