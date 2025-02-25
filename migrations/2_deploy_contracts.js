const MyToken = artifacts.require("IdentityRegistry");

module.exports=function(deployer){
    deployer.deploy(MyToken)
};