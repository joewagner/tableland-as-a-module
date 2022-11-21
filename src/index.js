import { connect } from "@tableland/sdk";

const go = async function () {
    const conn = connect({ chain: "ethereum-goerli" });
    await conn.siwe();

    console.log(conn);
};

go().catch(err => {
    console.log("Error", err);
})
