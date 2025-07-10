import React from 'react';
import { FaEye } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { Button, Segmented, Space, Switch, Table, Typography } from 'antd';
const fixedColumns = [
  {
    title: 'ID',
    dataIndex: 'id',
    width: 100,
    fixed: 'left',
  },
  {
    title: 'CourseName',
    dataIndex: 'firstName',
    width: 120,
    fixed: 'left',
  },
  {
    title: 'LastName',
    dataIndex: 'lastName',
    width: 120,
    fixed: 'left',
  },
  {
    title: 'Group',
    width: 120,
    render: (_, record) => `Group ${Math.floor(record.id / 4)}`,
    onCell: record => ({
      rowSpan: record.id % 4 === 0 ? 4 : 0,
    }),
  },
  {
    title: 'Age',
    dataIndex: 'age',
    width: 100,
    onCell: record => ({
      colSpan: record.id % 4 === 0 ? 2 : 1,
    }),
  },
  {
    title: 'Address 1',
    dataIndex: 'address1',
    onCell: record => ({
      colSpan: record.id % 4 === 0 ? 0 : 1,
    }),
  },
  
  {
    title: 'Action',
    width: 150,
    fixed: 'right',
    render: () => (
      <Space>
  <div className="flex gap-4 items-center">
  <Typography.Link>
    <FaEye className="text-xl font-bold text-[#2525AD]" />
  </Typography.Link>

  <Typography.Link>
    <MdDeleteForever className="text-xl font-bold text-red-500" />
  </Typography.Link>
</div>


      </Space>
    ),
  },
];
const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    width: 100,
  },
  {
    title: 'FistName',
    dataIndex: 'firstName',
    width: 120,
  },
  {
    title: 'LastName',
    dataIndex: 'lastName',
  },
];
const getData = length =>
  Array.from({ length }).map((_, index) => ({
    id: index,
    firstName: `First_${index.toString(16)}`,
    lastName: `Last_${index.toString(16)}`,
    age: 25 + (index % 10),
    address1: `New York No. ${index} Lake Park`,
    
  }));
const DashboardTable = () => {
  const [fixed, setFixed] = React.useState(true);
  const [bordered, setBordered] = React.useState(true);
  const [expanded, setExpanded] = React.useState(false);
  const [empty, setEmpty] = React.useState(false);
  const [count, setCount] = React.useState(10000);
  const tblRef = React.useRef(null);
  const data = React.useMemo(() => getData(count), [count]);
  const mergedColumns = React.useMemo(() => {
    if (!fixed) {
      return columns;
    }
    if (!expanded) {
      return fixedColumns;
    }
    return fixedColumns.map(col => Object.assign(Object.assign({}, col), { onCell: undefined }));
  }, [expanded, fixed]);
  const expandableProps = React.useMemo(() => {
    if (!expanded) {
      return undefined;
    }
    return {
      columnWidth: 48,
      expandedRowRender: record => <p style={{ margin: 0 }}>🎉 Expanded {record.address1}</p>,
      rowExpandable: record => record.id % 2 === 0,
    };
  }, [expanded]);
  return (
//     <div style={{ padding: 64 }}>
//       <Space direction="vertical" style={{ width: '100%' }}>
//         <Space>
//           <Switch
//             checked={bordered}
//             onChange={() => setBordered(!bordered)}
//             checkedChildren="Bordered"
//             unCheckedChildren="Bordered"
//           />
//           <Switch
//             checked={fixed}
//             onChange={() => setFixed(!fixed)}
//             checkedChildren="Fixed"
//             unCheckedChildren="Fixed"
//           />
//           <Switch
//             checked={expanded}
//             onChange={() => setExpanded(!expanded)}
//             checkedChildren="Expandable"
//             unCheckedChildren="Expandable"
//           />
//           <Switch
//             checked={empty}
//             onChange={() => setEmpty(!empty)}
//             checkedChildren="Empty"
//             unCheckedChildren="Empty"
//           />
//           <Segmented
//             value={count}
//             onChange={setCount}
//             options={[
//               { label: 'None', value: 0 },
//               { label: 'Less', value: 4 },
//               { label: 'Lot', value: 10000 },
//             ]}
//           />

//            {data.length >= 999 && (
//         <Button
//           onClick={() => {
//             var _a;
//             return (_a = tblRef.current) === null || _a === void 0
//               ? void 0
//               : _a.scrollTo({ index: 999 });
//           }}
//         >
//           Scroll To index 999
//         </Button>
//       )}
//     </Space>

//     <Table
//       bordered={bordered}
//       virtual
//       columns={mergedColumns}
//       scroll={{ x: 2000, y: 400 }}
//       rowKey="id"
//       dataSource={empty ? [] : data}
//       pagination={false}
//       ref={tblRef}
//       rowSelection={expanded ? undefined : { type: 'radio', columnWidth: 48 }}
//       expandable={expandableProps}
//     />
//   </Space>
// </div>
<div className="w-full px-4 py-8 sm:px-6 md:px-10 max-w-7xl mx-auto">
  <div className="flex flex-wrap gap-4 items-center mb-6">
    <Switch
      checked={bordered}
      onChange={() => setBordered(!bordered)}
      checkedChildren="Bordered"
      unCheckedChildren="Bordered"
    />
    <Switch
      checked={fixed}
      onChange={() => setFixed(!fixed)}
      checkedChildren="Fixed"
      unCheckedChildren="Fixed"
    />
    <Switch
      checked={expanded}
      onChange={() => setExpanded(!expanded)}
      checkedChildren="Expandable"
      unCheckedChildren="Expandable"
    />
    <Switch
      checked={empty}
      onChange={() => setEmpty(!empty)}
      checkedChildren="Empty"
      unCheckedChildren="Empty"
    />
    <Segmented
      value={count}
      onChange={setCount}
      options={[
        { label: 'None', value: 0 },
        { label: 'Less', value: 4 },
        { label: 'Lot', value: 10000 },
      ]}
    />
    {data.length >= 999 && (
      <Button
        onClick={() => {
          tblRef.current?.scrollTo({ index: 999 });
        }}
      >
        Scroll To index 999
      </Button>
    )}
  </div>

  <div className="overflow-x-auto border border-gray-200 shadow rounded-lg">
    <Table
      bordered={bordered}
      virtual
      columns={mergedColumns}
      scroll={{ x: 2000, y: 400 }}
      rowKey="id"
      dataSource={empty ? [] : data}
      pagination={false}
      ref={tblRef}
      rowSelection={expanded ? undefined : { type: 'radio', columnWidth: 48 }}
      expandable={expandableProps}
    />
  </div>
</div>




  );
};
export default DashboardTable;