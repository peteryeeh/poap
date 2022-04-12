const hre = require("hardhat");

async function main() {

    // 1. 建立合約
    const Poap = await hre.ethers.getContractFactory("Poap");

    // 2. 初始化設定
    const poap = await Poap.deploy();

    // 3. 佈署合約
    await poap.deployed();

    // 4. 確認地址
    console.log(`poap deployed to: ${poap.address}\n`);
}

// Hardhat 推薦以這樣的形式呼叫 Main 函數來執行
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
