import React from "react";
import { Controller } from "react-hook-form";
import { TextField } from "@material-ui/core";
import { Typography } from "@mui/material";
import Select from "react-select";
import { countries, states } from "./countryList";

const ReactHookForm = ({ watch, control, resetField, errors }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Controller
        name="name"
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, value }, fieldState: { error } }) => {
          return (
            <>
              <TextField
                placeholderText="Your name goes here!"
                type="text"
                name="name"
                value={value}
                label="Name"
                variant="outlined"
                onChange={onChange}
                error={error}
                helperText={error ? "Name is required" : ""}
              />
            </>
          );
        }}
      />
      <Controller
        name="email"
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, value }, fieldState: { error } }) => {
          return (
            <>
              <TextField
                placeholderText="Your email-id goes here!"
                type="text"
                name="email"
                variant="outlined"
                label="Email"
                value={value}
                onChange={onChange}
                error={error}
                helperText={error ? "Please enter proper email" : ""}
              />
            </>
          );
        }}
      />
      <Controller
        name="address"
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, value }, fieldState: { error } }) => {
          return (
            <>
              <TextField
                multiline
                variant="outlined"
                InputProps={{
                  rows: 3
                }}
                label="Address"
                value={value}
                onChange={onChange}
                error={error}
                helperText={error ? "Please enter address" : ""}
              />
            </>
          );
        }}
      />
      <Controller
        name="country"
        control={control}
        rules={{
          required: true,
          validate: {
            isCountry: (v) => {
              return v.value !== "" || "Please select country";
            }
          }
        }}
        render={({ field: { onChange, value }, fieldState: { error } }) => {
          return (
            <>
              <Typography variant="body1">Country</Typography>
              <Select
                name="country"
                isClearable
                styles={
                  error && {
                    control: (provided, state) => ({
                      ...provided,
                      borderColor: "#fb6340",
                      borderRadius: "0.25rem"
                    }),
                    valueContainer: (provided, state) => ({
                      ...provided,
                      padding: "8px 8px"
                    })
                  }
                }
                onChange={(selectedOption) => {
                  resetField("state", {
                    defaultValue: { label: "", value: "" }
                  });
                  onChange(selectedOption);
                }}
                value={{ label: value?.label, value: value?.value }}
                options={countries}
              />
              {error?.message.length ? (
                <Typography variant="body2" color="#fb6340">
                  {error.message}
                </Typography>
              ) : null}
            </>
          );
        }}
      />
      <Controller
        name="state"
        control={control}
        rules={{
          required: true,
          validate: {
            isState: (v) => {
              return v.value !== "" || "Please select state";
            }
          }
        }}
        render={({ field, fieldState: { error } }) => {
          const countryDetails = watch("country");
          return (
            <>
              <Typography variant="body1">State</Typography>
              <Select
                name="state"
                isSearchable
                options={
                  countryDetails?.value.length
                    ? states[countryDetails.value]
                    : []
                }
                placeholder="Select state here"
                {...field}
                styles={
                  error && {
                    control: (provided, state) => ({
                      ...provided,
                      borderColor: "#fb6340",
                      borderRadius: "0.25rem"
                    }),
                    valueContainer: (provided, state) => ({
                      ...provided,
                      padding: "8px 8px"
                    })
                  }
                }
              />
              {error?.message.length ? (
                <Typography variant="body2" color="#fb6340">
                  {error.message}
                </Typography>
              ) : null}
            </>
          );
        }}
      />
    </div>
  );
};
export default ReactHookForm;
