import React from "react";
import styles from './linkList.module.scss'
import { Table, Pagination } from "antd";
import { useAnimes } from "@/hooks/useAnimes.tsx/useAnimes";
import type { ColumnsType } from 'antd/es/table';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Native Title',
    dataIndex: 'nativeTitle',
    key: 'title',
  },
  {
    title: 'Site URL',
    dataIndex: 'siteUrl',
    key: 'link',
    render: (text) => <a href={text} target="_blank">{text}</a>
  },
]

const LinkList = () => {

  const { animes, setPage } = useAnimes();

  const onChange = (pageNumber: number) => {
    setPage(pageNumber);
  };

  return (
    <div className={styles.linkList}>
      <Table
        loading={animes.length == 0? true : false}
        columns={columns}
        dataSource={animes}
        size="small"
        pagination={false}
        style={{ width: "95%"}}
      />
      <Pagination defaultCurrent={1} onChange={onChange} total={50} style={{ marginTop: "20px"}} />
    </div>
  )
}

export default LinkList;
