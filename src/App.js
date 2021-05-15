import "./styles.css";
import React from "react";
import {
  Table,
  PageHeader,
  Radio,
  Menu,
  Dropdown,
  Row,
  Col,
  Button,
  Input,
  Checkbox,
  Spin,
  message
} from "antd";
import { DownOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import axios from "axios";
import { InputNumber } from "antd";
import Filter from "./Filter";
import useState from "react-usestateref";

import { Typography } from "antd";

const { Title } = Typography;
const audio = new Audio(
  "https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3"
);

function addDays(date, days) {
  const copy = new Date(Number(date));
  copy.setDate(date.getDate() + days);
  return copy;
}
const vacccines = [
  { label: "Covishield", value: "COVISHIELD" },
  { label: "Covaxin", value: "COVAXIN" }
];
const feeTypes = [
  { label: "Free", value: "Free" },
  { label: "Paid", value: "Paid" }
];
const columns = [
  {
    title: "Center",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "District",
    dataIndex: "district_name",
    key: "district_name"
  },
  {
    title: "Pincode",
    dataIndex: "pincode",
    key: "pincode"
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date"
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address"
  },
  {
    title: "Slots Avalilable",
    dataIndex: "available_capacity",
    key: "available_capacity"
  },
  {
    title: "Min Age Limit",
    dataIndex: "min_age_limit",
    key: "min_age_limit"
  },
  {
    title: "Vaccine",
    dataIndex: "vaccine",
    key: "vaccine"
  },
  {
    title: "Fee type",
    dataIndex: "fee_type",
    key: "fee_type"
  }
];
const sleepNow = (delay) =>
  new Promise((resolve) => setTimeout(resolve, delay));

export default function App() {
  const [searchType, setValue, searchRef] = useState(1);
  const [minAge, setMinAge, minAgeRef] = useState(18);
  const [pincode, setPincode] = useState("");
  const [interval, setInterval, intervalRef] = useState(1);
  const [weeks, setWeeks, weeksRef] = useState(1);
  const [searching, setSearching, searchingRef] = useState(false);
  const [selectedVaccines, setSelectedVaccines, vaccinesRef] = useState([
    "COVAXIN",
    "COVISHIELD"
  ]);
  const [selectedFeeTypes, setSelectedFeeTypes, feeRef] = useState([
    "Free",
    "Paid"
  ]);
  const [selectedState, setSelectedState] = useState({
    state_id: "0",
    state_name: "Select State"
  });
  const [statesData, setStatesData] = useState([]);
  const [selectedDistricts, setSelectedDistricts, districtsRef] = useState([]);
  const [selectedPincodes, setSelectedPincodes, pincodesRef] = useState([]);
  const [districtsData, setDistrictsData] = useState([]);
  const [slotsData, setSlotsData] = useState([]);
  const [minSlots, setMinSlots, minSlotsRef] = useState(1);
  const onSearchTypeChange = (e) => {
    setValue(e.target.value);
  };
  const onMinAgeChange = (e) => {
    setMinAge(e.target.value);
  };
  const onPinChange = (e) => {
    setPincode(e.target.value);
  };
  const onMinSlotsChange = (minSlots) => {
    setMinSlots(minSlots);
  };
  const onWeeksChange = noOfWeeks => {
    setWeeks(noOfWeeks);
  };

  async function fetchSlots() {
    const searchByPin = searchRef.current === 2;
    let slots = [];
    const currDate = new Date();
    const districtUrl =
      "https://cdn-api.co-vin.in/api/v2/appointment/sessions/calendarByDistrict?district_id=";
    const pinUrl =
      "https://cdn-api.co-vin.in/api/v2/appointment/sessions/calendarByPin?pincode=";
    let codes = [];
    if (searchByPin) {
      codes = pincodesRef.current;
    } else {
      codes = [];
      districtsRef.current.forEach((dist) => {
        codes.push(dist.district_id);
      });
    }
    const feeTypes = feeRef.current;
    const vacccines = vaccinesRef.current;
    for(let k = 0; k < weeksRef.current; k++) {
      const dateToFetch = addDays(currDate, k*7).toLocaleDateString().replaceAll("/", "-");
      for (let i = 0; i < codes.length; i++) {
        let url = "";
        const code = codes[i].trim();
        if (searchByPin && code) {
          url = pinUrl + code;
        } else {
          url = districtUrl + code;
        }
        url += "&date=" + dateToFetch;
        axios
          .get(url)
          .then((response) => {
            const a = response.data;
            let idx = 1;
            a.centers.forEach(function (centre) {
              if (centre && centre.sessions) {
                if (feeTypes.indexOf(centre.fee_type) !== -1) {
                  centre.sessions.forEach(function (session) {
                    if (
                      session.min_age_limit === minAgeRef.current &&
                      session.available_capacity >= minSlotsRef.current &&
                      vacccines.indexOf(session.vaccine) !== -1
                    ) {
                      audio.play();
                      const slot = {
                        key: centre.name + idx,
                        name: centre.name,
                        address: centre.address,
                        fee_type: centre.fee_type,
                        min_age_limit: session.min_age_limit,
                        available_capacity: session.available_capacity,
                        date: session.date,
                        vaccine: session.vaccine,
                        district_name: centre.district_name,
                        pincode: centre.pincode
                      };
                      slots.push(slot);
                      idx++;
                      console.log(
                        (searchByPin ? "Pincode" : "District") +
                          ": " +
                          code +
                          "--->>" +
                          "Centre: " +
                          centre.name +
                          "----->>>>---Date: " +
                          session.date +
                          "---->>>> " +
                          session.available_capacity
                      );
                    }
                  });
                }
              }
            });
            if (slots.length > 0) {
              setSlotsData(slots);
            }
          })
          .catch((error) => {
            message.error('If this message is appearing continuously then something is wrong. \n Please reload the application and then try again or login to Cowin once in the browser and then try again. If the problem persists then contact the Developer - Yash Bagadia');
            console.log(error);
          });
      }
  }
    if (intervalRef.current * 1000 > 500) {
      await sleepNow(intervalRef.current * 1000);
      fetchSlots();
    }
  }
  async function clearData() {
    setSlotsData([]);
    await sleepNow(10000);
    clearData();
  }
  const searchSlots = () => {
    setInterval(0);
    setInterval(1);
    fetchSlots();
    clearData();
    setSearching(true);
    audio.play();
  };
  const stopSearch = () => {
    setInterval(0);
    setSlotsData([]);
    setSearching(false);
  };
  const onStateClick = (state) => {
    setSelectedState({
      state_id: state.key,
      state_name: state.item.node.innerText
    });
  };
  const onDistrictRemoval = (removedDist) => {
    const districts = selectedDistricts.filter(
      (dist) => dist.district_id !== removedDist.district_id
    );
    setSelectedDistricts(districts);
  };
  const onPinRemoval = (removedPin) => {
    const pincodes = selectedPincodes.filter((pin) => pin !== removedPin);
    setSelectedPincodes(pincodes);
  };

  const removeAllItems = () => {
    if (searchType === 1) {
      setSelectedDistricts([]);
    } else {
      setSelectedPincodes([]);
    }
  };
  const onDistrictClick = (distAdded) => {
    const districts = [...selectedDistricts];
    const existingDist = districts.find((dist) => {
      return dist.district_id === distAdded.key;
    });
    if (!existingDist) {
      districts.push({
        district_id: distAdded.key,
        district_name: distAdded.item.node.innerText
      });
      setSelectedDistricts(districts);
    }
  };
  const onPincodeAdd = (e) => {
    const pincodes = [...selectedPincodes];
    const existingPin = pincodes.find((pin) => {
      return pin === e.target.value;
    });
    if (!existingPin) {
      pincodes.push(e.target.value);
      setSelectedPincodes(pincodes);
      setPincode("");
    }
  };
  React.useEffect(() => {
    axios
      .get("https://cdn-api.co-vin.in/api/v2/admin/location/states")
      .then((response) => {
        const data = response.data.states;
        setStatesData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  React.useEffect(() => {
    axios
      .get(
        "https://cdn-api.co-vin.in/api/v2/admin/location/districts/" +
          selectedState.state_id
      )
      .then((response) => {
        const data = response.data.districts;
        setDistrictsData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [selectedState]);
  const states = (
    <Menu onClick={onStateClick}>
      {statesData.map((state) => {
        return <Menu.Item key={state.state_id}>{state.state_name}</Menu.Item>;
      })}
    </Menu>
  );
  const districts = (
    <Menu onClick={onDistrictClick}>
      {districtsData.map((district) => {
        return (
          <Menu.Item key={district.district_id}>
            {district.district_name}
          </Menu.Item>
        );
      })}
    </Menu>
  );
  const districtTags = (
    <React.Fragment>
      <Filter
        items={searchType === 1 ? selectedDistricts : selectedPincodes}
        visible={true}
        isDistrict={searchType === 1}
        itemRemoved={searchType === 1 ? onDistrictRemoval : onPinRemoval}
        allItemsRemoved={removeAllItems}
      />
    </React.Fragment>
  );
  return (
    <div className="App">
      <Title>Cowin Vaccine Slot Monitor</Title>
      <Row justify="center" gutter={24}>
        <Col>
          <Title level={5}>Enter no. of slots required for notification</Title>
        </Col>
        <Col>
          <InputNumber
            min={0}
            max={100}
            value={minSlots}
            onChange={onMinSlotsChange}
          />
        </Col>
        <Col>
          <Title level={5}>Minimum Age</Title>
        </Col>
        <Col>
          <Radio.Group onChange={onMinAgeChange} value={minAge}>
            <Radio value={18}>18+</Radio>
            <Radio value={45}>45+</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <Row justify="center" gutter={24}>
        <Col>
          <Radio.Group onChange={onSearchTypeChange} value={searchType}>
            <Radio value={1}>Search by District</Radio>
            <Radio value={2}>Search by Pincode</Radio>
          </Radio.Group>
        </Col>
        <Col>
          <Checkbox.Group
            options={vacccines}
            value={selectedVaccines}
            onChange={setSelectedVaccines}
          />
        </Col>
        <Col>
          <Checkbox.Group
            options={feeTypes}
            value={selectedFeeTypes}
            onChange={setSelectedFeeTypes}
          />
        </Col>
      </Row>
      <Row justify="center" gutter={24}>
      {searchType === 1 ? (
        <React.Fragment>
            <Col>
              <Dropdown overlay={states} trigger={["click"]}>
                <Button>
                  {selectedState.state_name} <DownOutlined />
                </Button>
              </Dropdown>
            </Col>
            <Col>
              <Dropdown overlay={districts} trigger={["click"]}>
                <Button>
                  Select District <DownOutlined />
                </Button>
              </Dropdown>
            </Col>
        </React.Fragment>
      ) : (
        <React.Fragment>
            <Col span={12}>
              <Input
                placeholder="Type a pincode and then press Enter"
                onPressEnter={onPincodeAdd}
                onChange={onPinChange}
                value={pincode}
              />
            </Col>
        </React.Fragment>
      )}
      <Col>
          <Title level={5}>No. of weeks to search for</Title>
        </Col>
      <Col>
          <InputNumber
            min={1}
            max={4}
            value={weeks}
            onChange={onWeeksChange}
          />
        </Col>
      </Row>
      <Row justify="center" gutter={24}>
        {districtTags}
      </Row>
      <Row justify="center" gutter={24}>
        <Col>
          <Button
            disabled={
              searching ||
              (searchType === 2 && selectedPincodes.length === 0) ||
              (searchType === 1 && selectedDistricts.length === 0)
            }
            onClick={searchSlots}
            type="primary"
          >
            Start Searching
          </Button>
        </Col>
        <Col>
          <Button disabled={!searching} type="danger" onClick={stopSearch}>
            Stop Searching
          </Button>
        </Col>
      </Row>
      <Row justify="center">
        {slotsData.length > 0 || !searching ? (
          <Table dataSource={slotsData} columns={columns} />
        ) : (
          <Spin size="large" />
        )}
      </Row>
    </div>
  );
}
