package com.iezu.common;

/**
 * Created by 20150831 on 2015/9/13.
 */
public class ResultModel {
    private  int resultcode;

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public int getResultcode() {
        return resultcode;
    }

    public void setResultcode(int resultcode) {
        this.resultcode = resultcode;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }

    private String msg;
    private  Object data;
}
