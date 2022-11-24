function flippingBits(n) {
    const b = BigInt(n);
    return ~b & 0xFFFFFFFFn
}
