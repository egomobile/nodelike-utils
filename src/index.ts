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

import { toStringSafe } from "@egomobile/js-utils";

/**
 * Checks if environment variable NODE_ENV is set to 'development'.
 *
 * @example
 * ```
 * // NODE_ENV === 'development'
 * // NODE_ENV === 'Development'
 * // NODE_ENV === 'DEVELOPMENT'
 * isDev() === true
 * ```
 *
 * @returns {boolean} (true), NODE_ENV is set to 'development'.
 */
export function isDev(): boolean {
    return isNodeEnv("development");
}

/**
 * Handles an input value as string and checks if its string representation
 * has the same value as NODE_ENV environment variable (case insensitive).
 *
 * @param {string} name The name to check.
 *
 * @example
 * ```
 * // NODE_ENV === 'development'
 * isNodeEnv('development')  // (true)
 * isNodeEnv('Development')  // (true)
 * isNodeEnv('DEVELOPMENT')  // (true)
 * isNodeEnv('production')  // (false)
 * isNodeEnv('Production')  // (false)
 * isNodeEnv('PRODUCTION')  // (false)
 * ```
 *
 * @returns {boolean} (true), NODE_ENV is set to 'production'.
 */
export function isNodeEnv(name: any): boolean {
    return process?.env?.NODE_ENV?.toLowerCase().trim() ===
        toStringSafe(name).toLowerCase().trim();
}

/**
 * Checks if environment variable NODE_ENV is set to 'production'.
 *
 * @example
 * ```
 * // NODE_ENV === 'production'
 * // NODE_ENV === 'Production'
 * // NODE_ENV === 'PRODUCTION'
 * isProd() === true
 * ```
 *
 * @returns {boolean} (true), NODE_ENV is set to 'production'.
 */
export function isProd(): boolean {
    return isNodeEnv("production");
}

export * from "./utils";
