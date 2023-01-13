use hex;
use leb128;
use log::*;
use tap::prelude::*;

pub fn to_unsigned(input: &Vec<u8>) -> Option<u64> {
    let mut readable = &input[..];
    leb128::read::unsigned(&mut readable).ok().tap(|v| if v.is_none() {error!("{:?}", input)})
}

pub fn from_unsigned(input: u64) -> Option<Vec<u8>> {
    let mut writable = Vec::with_capacity(3);
    leb128::write::unsigned(&mut writable, input).ok()?;
    Some(writable)
}

pub fn to_signed(input: &Vec<u8>) -> Option<i64> {
    let mut readable = &input[..];
    leb128::read::signed(&mut readable).ok().tap(|v| if v.is_none() {error!("{:?}", input)})
}

pub fn from_signed(input: i64) -> Option<Vec<u8>> {
    let mut writable = Vec::with_capacity(3);
    leb128::write::signed(&mut writable, input).ok()?;
    Some(writable)
}

pub fn to_hex(input: &Vec<u8>) -> Option<String> {
    Some(hex::encode_upper(input))
}

pub fn from_hex(input: String) -> Option<Vec<u8>> {
    hex::decode(input).ok()
}
