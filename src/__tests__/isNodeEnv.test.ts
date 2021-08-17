// This file is part of the @egomobile/nodelike-utils distribution.
// Copyright (c) Next.e.GO Mobile SE, Aachen, Germany (https://e-go-mobile.com/)
//
// @egomobile/nodelike-utils is free software: you can redistribute it and/or modify
// it under the terms of the GNU Lesser General Public License as
// published by the Free Software Foundation, version 3.
//
// @egomobile/nodelike-utils is distributed in the hope that it will be useful, but
// WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
// Lesser General Public License for more details.
//
// You should have received a copy of the GNU Lesser General Public License
// along with this program. If not, see <http://www.gnu.org/licenses/>.

import { isNodeEnv } from '..';

describe('isNodeEnv() function', () => {
    it.each(['development', 'production'])('should return false, because NODE_ENV === test', (name) => {
        expect(process.env.NODE_ENV).toBe('test');
        expect(isNodeEnv(name)).toBe(false);
    });

    it.each(['test', 'Test', 'TEST'])('should return true, because NODE_ENV === test', (name) => {
        expect(process.env.NODE_ENV).toBe('test');
        expect(isNodeEnv(name)).toBe(true);
    });
});
