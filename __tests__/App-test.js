/**
 * @jest-environment jsdom
 */

import "react-native";
import React from "react";
import App from "../App";
import renderer from "react-test-renderer";
import Link from "../Link";
import {Button} from "react-native";
import {shallow} from 'enzyme';

// it("renders correctly", () => {
//     renderer.create(<App/>);
// });

// function fn() {
//     console.log('print')
// }
//
// it("renders Link correctly", () => {
//     const tree = renderer
//         .create(
//             <Link
//                 title="Click"
//                 fn={fn}
//             />
//         )
//         .toJSON();
//     expect(tree).toMatchSnapshot({
//         title: expect.any(String)
//     });
// });

// it('will fail every time', () => {
//     const user = {
//         createdAt: new Date(),
//         id: Math.floor(Math.random() * 20),
//         name: 'LeBron James',
//     };
//
//     expect(user).toMatchSnapshot({
//         createdAt: expect.any(Date),
//         id: expect.any(Number),
//     });
// });

// function sum(a, b) {
//     return a + b;
// }

// test('adds 1 + 2 to equal 3', () => {
//     expect(sum(1, 2)).toBe(3);
// });
//
// test('object assignment', () => {
//     const data = {one: 1};
//     data['two'] = 2;
//     expect(data).toEqual({one: 1, two: 2});
// });
//
// test('adding positive numbers is not zero', () => {
//     for (let a = 1; a < 10; a++) {
//         for (let b = 1; b < 10; b++) {
//             expect(a + b).not.toBe(0);
//         }
//     }
// });

describe('Component tested with airbnb enzyme', () => {
    test('App mount with enzyme', () => {
        const wrapper = shallow(<Link title="Click"/>);
        expect(wrapper.find(Button).prop('title')).toBe('Click');
    });
});

// test('two plus two', () => {
//     const value = 2 + 2;
//     expect(value).toBeGreaterThan(3);
//     expect(value).toBeGreaterThanOrEqual(3.5);
//     expect(value).toBeLessThan(5);
//     expect(value).toBeLessThanOrEqual(4.5);
//
//     // toBe and toEqual are equivalent for numbers
//     expect(value).toBe(4);
//     expect(value).toEqual(4);
// });

// test('adding floating point numbers', () => {
//     const value = 0.1 + 0.2;
//     //expect(value).toBe(0.3);           This won't work because of rounding error
//     expect(value).toBeCloseTo(0.3); // This works.
// });
//
// function compileAndroidCode() {
//     throw new Error('you are using the wrong JDK');
// }
//
// test('compiling android goes as expected', () => {
//     expect(compileAndroidCode).toThrow();
//     expect(compileAndroidCode).toThrow(Error);
//
//     // You can also use the exact error message or a regexp
//     expect(compileAndroidCode).toThrow('you are using the wrong JDK');
//     expect(compileAndroidCode).toThrow(/JDK/);
// });
