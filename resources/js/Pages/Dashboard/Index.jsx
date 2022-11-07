import React, { useEffect, useRef, useState } from "react";
// layout
import Loged from "@/Layouts/Loged";
// component
import Table from "@/Components/Table";
import Form from "@/Components/Form";
import Info from "@/Components/Info";

const Index = (props) => {
    return (
        <Loged>
            <div className="flex flex-col bg-base-content max-w-full mx-12 my-16 p-6 space-y-6 rounded-lg">
                <div className="space-y-6">
                    <Info flash={props.flash.message} />
                    <Form />
                </div>
                <div>
                    <Table allMarker={props.allMarker} />
                </div>
            </div>
        </Loged>
    );
};

export default Index;
