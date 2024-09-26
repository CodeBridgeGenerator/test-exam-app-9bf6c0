
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
organizationName: faker.datatype.number(""),
numberOfEmployees: faker.datatype.number(""),
fullTimeTrainers: faker.datatype.number(""),
partTimeTrainers: faker.datatype.number(""),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
