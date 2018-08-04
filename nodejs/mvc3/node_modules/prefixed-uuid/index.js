/*
 * index.js: v1 and v4 UUID generator with prefixes
 *
 * (C) 2012 Tristan Slominski <tristan.slominski@gmail.com>
 */

var _uuid = require( 'node-uuid' );

//
// ### function uuid ( prefix, version )
// #### @prefix {string} optional prefix to append in front of the uuid
// #### @version {"v1"||"v4"} version of uuid to generate
// Generates a uuid based on presence of a prefix and version specified. The 
// default version will be v4 (non-timestamp based). @version param will 
// override the default.
//
var uuid = function uuid ( prefix, version ) {

  var gen = ( version && version.toLowerCase() == 'v1' ) ? _uuid.v1 : _uuid.v4;
  return ( prefix ? prefix + '-' : '' ) + gen();

}; // uuid

module.exports = uuid;