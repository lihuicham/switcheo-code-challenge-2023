pragma solidity ^0.8.17;

contract SimpleStorage {
    string value;

    function set(string x) public {
        value = x;
    }

    function get() public view returns (string) {
        return value;
    }
}