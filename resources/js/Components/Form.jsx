import React, { useState } from "react";
// 3party
import { useFormik } from "formik";
import * as Yup from "yup";
import { Inertia } from "@inertiajs/inertia";

const Form = () => {
    const [show, setShow] = useState(false);

    const addMarkerSchema = Yup.object().shape({
        name: Yup.string()
            .min(5, "sangat singkat")
            .required("kolom ini wajib di isi"),
        alamat: Yup.string()
            .min(5, "nama alamat sangat singkat")
            .required("Kolom ini wajib di isi"),
        lng: Yup.number()
            .min(5, "input langtitud terlalu pendek")
            .required("Kolom ini wajib di isi"),
        lat: Yup.number()
            .min(5, "Input Latitud Terlalu pendek")
            .required("Kolom ini wajib di isi"),
    });
    const formik = useFormik({
        initialValues: {
            name: "",
            alamat: "",
            lng: "",
            lat: "",
        },
        validationSchema: addMarkerSchema,
        onSubmit: (values, { resetForm }) => {
            handleSubmit(values, resetForm);
        },
    });

    const handleSubmit = (values, resetForm) => {
        Inertia.post("/dashboard", values);
        resetForm();
        setShow(!show);
    };

    return (
        <>
            <button
                className="btn btn-outline btn-primary"
                onClick={() => setShow(!show)}
            >
                {show ? "Tutup" : "Tambah lokasi baru"}
            </button>
            {show ? (
                <form
                    onSubmit={formik.handleSubmit}
                    className="flex flex-wrap bg-primary rounded-xl p-6 space-y-6 max-w-max"
                >
                    <div className="flex w-full space-x-12">
                        <div className="form-control w-full max-w-md">
                            <label className="label">
                                {formik.errors["name"] && (
                                    <span className="label-text">
                                        {formik.errors["name"]}
                                    </span>
                                )}
                            </label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Name"
                                className="input input-bordered input-primary w-full max-w-md"
                                onChange={formik.handleChange}
                                value={formik.values.name}
                            />
                        </div>
                        <div className="form-control w-full max-w-md">
                            <label className="label">
                                {formik.errors["alamat"] && (
                                    <span className="label-text">
                                        {formik.errors["alamat"]}
                                    </span>
                                )}
                            </label>
                            <input
                                id="alamat"
                                type="text"
                                placeholder="Alamat"
                                className="input input-bordered input-primary w-full max-w-md"
                                onChange={formik.handleChange}
                                value={formik.values.alamat}
                            />
                        </div>
                    </div>
                    <div className="flex w-full space-x-12">
                        <div className="form-control w-full max-w-md">
                            <label className="label">
                                {formik.errors["lat"] && (
                                    <span className="label-text">
                                        {formik.errors["lat"]}
                                    </span>
                                )}
                            </label>
                            <input
                                id="lat"
                                type="number"
                                placeholder="LATITUDE"
                                className="input input-bordered input-primary w-full max-w-md"
                                onChange={formik.handleChange}
                                value={formik.values.lat}
                            />
                        </div>
                        <div className="form-control w-full max-w-md">
                            <label className="label">
                                {formik.errors["lng"] && (
                                    <span className="label-text">
                                        {formik.errors["lng"]}
                                    </span>
                                )}
                            </label>
                            <input
                                id="lng"
                                type="number"
                                placeholder="LONGITUDE"
                                className="input input-bordered input-primary w-full max-w-md"
                                onChange={formik.handleChange}
                                value={formik.values.lng}
                            />
                        </div>
                    </div>
                    {!(formik.isValid && formik.dirty) ? (
                        <button className="btn btn-square loading"></button>
                    ) : (
                        <button className="btn" type="submit">
                            Save
                        </button>
                    )}
                </form>
            ) : null}
        </>
    );
};

export default Form;
