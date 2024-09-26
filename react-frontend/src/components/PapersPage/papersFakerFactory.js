
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
name: faker.date.past(""),
dateStart: faker.date.past(""),
dateEnd: faker.date.past(""),
timeStart: faker.date.past(""),
timeEnd: faker.date.past(""),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
