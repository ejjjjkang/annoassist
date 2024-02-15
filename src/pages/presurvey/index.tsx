import { SyntheticEvent, useEffect, useState } from "react";
import {
	FormControl,
	FormControlLabel,
	RadioGroup,
	Radio,
	FormLabel,
	Button,
	Box,
	Container,
	Typography,
	Paper,
	Divider,
} from "@mui/material";

interface FormContent {
	"pre-1": string;
	"pre-2": string;
	"pre-3-1": string;
	"pre-4-1": string;
	"pre-5-1": string;
	"pre-6-1": string;
	"pre-7-1": string;
	"pre-8-1": string;
	"pre-9-1": string;
	"pre-3-2": string;
	"pre-4-2": string;
	"pre-5-2": string;
	"pre-6-2": string;
	"pre-7-2": string;
	"pre-8-2": string;
	"pre-9-2": string;
}

const Presurvey = () => {
	const [data, setData] = useState<FormContent | null>();

	const handleSubmit = (event: SyntheticEvent) => {
		event.preventDefault();
		const target = event.target as typeof event.target & {
			"pre-1": { value: string };
			"pre-2": { value: string };
			"pre-3-1": { value: string };
			"pre-3-2": { value: string };

			"pre-4-1": { value: string };
			"pre-4-2": { value: string };

			"pre-5-1": { value: string };
			"pre-5-2": { value: string };

			"pre-6-1": { value: string };
			"pre-6-2": { value: string };

			"pre-7-1": { value: string };
			"pre-7-2": { value: string };

			"pre-8-1": { value: string };
			"pre-8-2": { value: string };
			"pre-9-1": { value: string };
			"pre-9-2": { value: string };
		};

		setData({
			"pre-1": target["pre-1"].value,
			"pre-2": target["pre-2"].value,
			"pre-3-1": target["pre-3-1"].value,
			"pre-3-2": target["pre-3-2"].value,
			"pre-4-1": target["pre-4-1"].value,
			"pre-4-2": target["pre-4-2"].value,

			"pre-5-1": target["pre-5-1"].value,
			"pre-5-2": target["pre-5-2"].value,
			"pre-6-1": target["pre-6-1"].value,
			"pre-6-2": target["pre-6-2"].value,
			"pre-7-1": target["pre-7-1"].value,
			"pre-7-2": target["pre-7-2"].value,
			"pre-8-1": target["pre-8-1"].value,
			"pre-8-2": target["pre-8-2"].value,
			"pre-9-1": target["pre-9-1"].value,
			"pre-9-2": target["pre-9-2"].value,
		});
	};

	useEffect(() => {
		//fetch data
		console.log(data);
	}, [data]);

	return (
		<Container>
			<Typography align="center" variant="h5" sx={{ m: 5 }}>
				Before proceeding to the tasks, please answer the following questions to
				help us gain a better understanding of your experience related to these
				tasks.
			</Typography>
			<Box
				component="form"
				onSubmit={handleSubmit}
				sx={{ display: "flex", flexDirection: "column" }}
			>
				<FormControl required sx={{ padding: 3 }}>
					<FormLabel>
						1. In the past 12 months, how active were you on{" "}
						<b>data annotation tasks</b> -- labeling dataset with specific data
						fields -- on Upwork, Amazon MTurk, or any other crowdsorcing
						platforms?
					</FormLabel>
					<RadioGroup name="pre-1">
						<FormControlLabel
							label="No experience"
							control={<Radio />}
							value="1"
						/>
						<FormControlLabel
							label="A few times"
							control={<Radio />}
							value="2"
						/>
						<FormControlLabel
							label="Once a month"
							control={<Radio />}
							value="3"
						/>
						<FormControlLabel
							label="Once or twice a seek"
							control={<Radio />}
							value="4"
						/>
						<FormControlLabel
							label="Once a week"
							control={<Radio />}
							value="5"
						/>
						<FormControlLabel
							label="More than once a week"
							control={<Radio />}
							value="6"
						/>
					</RadioGroup>
				</FormControl>
				<FormControl required sx={{ padding: 3 }}>
					<FormLabel>
						2. In the past 12 months, how active were you on{" "}
						<b>data annotation tasks that require medical knowledge</b> on
						Upwork, Amazon MTurk, or any other crowdsorcing platforms?
					</FormLabel>
					<RadioGroup name="pre-2">
						<FormControlLabel
							label="No experience"
							control={<Radio />}
							value="1"
						/>
						<FormControlLabel
							label="A few times"
							control={<Radio />}
							value="2"
						/>
						<FormControlLabel
							label="Once a month"
							control={<Radio />}
							value="3"
						/>
						<FormControlLabel
							label="Once or twice a seek"
							control={<Radio />}
							value="4"
						/>
						<FormControlLabel
							label="Once a week"
							control={<Radio />}
							value="5"
						/>
						<FormControlLabel
							label="More than once a week"
							control={<Radio />}
							value="6"
						/>
					</RadioGroup>
				</FormControl>
				<Divider></Divider>
				<Typography variant="h6" sx={{ m: 5 }}>
					Please read descriptions carefully
				</Typography>
				<Box flexDirection={"row"} sx={{ padding: 3, display: "flex" }}>
					<Box sx={{ maxWidth: "50%" }}>
						<FormControl required sx={{ padding: 3 }}>
							<FormLabel>
								3-1. How confident are you in identifying medical symptoms/signs
								or relevant terminologies?
							</FormLabel>
							<RadioGroup name="pre-3-1">
								<FormControlLabel
									label="Extremely unconfident"
									control={<Radio />}
									value="1"
								/>
								<FormControlLabel
									label="Moderately unconfident"
									control={<Radio />}
									value="2"
								/>
								<FormControlLabel
									label="Slightly unconfident"
									control={<Radio />}
									value="3"
								/>
								<FormControlLabel
									label="Nor confident nor unconfident"
									control={<Radio />}
									value="4"
								/>
								<FormControlLabel
									label="Slightly confident"
									control={<Radio />}
									value="5"
								/>
								<FormControlLabel
									label="Moderately confident"
									control={<Radio />}
									value="6"
								/>
								<FormControlLabel
									label="Extremely confident"
									control={<Radio />}
									value="7"
								/>
							</RadioGroup>
						</FormControl>
					</Box>
					<Box sx={{ maxWidth: "50%" }}>
						<FormControl required sx={{ padding: 3 }}>
							<FormLabel>
								3-2. Below is a description to assist you in identifying labels.
								How well do you understand this description to annotate data
								associate with <b>symptoms and medical terminologies</b>?
							</FormLabel>
							<Paper sx={{ m: 1 }} variant="outlined">
								<ul>
									<li>
										{" "}
										<Typography sx={{ fontSize: "18px" }}>
											Symptom (sign) : An objective evidence that a patient or
											doctor is able to notice from the patient's body. Based on
											symptoms, doctors are able to judge patients' conditions
											or diseases.
										</Typography>
									</li>
									<ul>
										<li>
											<Typography sx={{ fontSize: "18px" }}>
												{" "}
												Example: rash, headache, fatigue, measles,
												conjunctivitis
											</Typography>
										</li>
									</ul>
								</ul>
							</Paper>
							<RadioGroup name="pre-3-2">
								<FormControlLabel
									label="Extremely not understanable"
									control={<Radio />}
									value="1"
								/>
								<FormControlLabel
									label="Moderately not understanable"
									control={<Radio />}
									value="2"
								/>
								<FormControlLabel
									label="Slightly not understanable"
									control={<Radio />}
									value="3"
								/>
								<FormControlLabel
									label="Nor understandable nor not understanable"
									control={<Radio />}
									value="4"
								/>
								<FormControlLabel
									label="Slightly understandable"
									control={<Radio />}
									value="5"
								/>
								<FormControlLabel
									label="Moderately understandable"
									control={<Radio />}
									value="6"
								/>
								<FormControlLabel
									label="Extremely understandable"
									control={<Radio />}
									value="7"
								/>
							</RadioGroup>
						</FormControl>
					</Box>
				</Box>
				<Box flexDirection={"row"} sx={{ padding: 3, display: "flex" }}>
					<Box sx={{ maxWidth: "50%" }}>
						<FormControl required sx={{ padding: 3 }}>
							<FormLabel>
								4-1. How confident are you in identifying events that patient
								undergo during a clinical study?
							</FormLabel>
							<RadioGroup name="pre-4-1">
								<FormControlLabel
									label="Extremely unconfident"
									control={<Radio />}
									value="1"
								/>
								<FormControlLabel
									label="Moderately unconfident"
									control={<Radio />}
									value="2"
								/>
								<FormControlLabel
									label="Slightly unconfident"
									control={<Radio />}
									value="3"
								/>
								<FormControlLabel
									label="Nor confident nor unconfident"
									control={<Radio />}
									value="4"
								/>
								<FormControlLabel
									label="Slightly confident"
									control={<Radio />}
									value="5"
								/>
								<FormControlLabel
									label="Moderately confident"
									control={<Radio />}
									value="6"
								/>
								<FormControlLabel
									label="Extremely confident"
									control={<Radio />}
									value="7"
								/>
							</RadioGroup>
						</FormControl>
					</Box>
					<Box sx={{ maxWidth: "50%" }}>
						<FormControl required sx={{ padding: 3 }}>
							<FormLabel>
								4-2. Below is the description to help you identify labels. How
								well do you understand this description to annotate data
								associate with <b>clinical event</b>?
							</FormLabel>
							<Paper sx={{ m: 1 }} variant="outlined">
								<ul>
									<li>
										{" "}
										<Typography sx={{ fontSize: "18px" }}>
											Clinical event : All those happenings of medical interest
											which patients undergo during a clinical study{" "}
										</Typography>
									</li>
									<ul>
										<li>
											<Typography sx={{ fontSize: "18px" }}>
												Example: a therapy, hospitalization, blood sampling
											</Typography>
										</li>
									</ul>
								</ul>
							</Paper>
							<RadioGroup name="pre-4-2">
								<FormControlLabel
									label="Extremely not understanable"
									control={<Radio />}
									value="1"
								/>
								<FormControlLabel
									label="Moderately not understanable"
									control={<Radio />}
									value="2"
								/>
								<FormControlLabel
									label="Slightly not understanable"
									control={<Radio />}
									value="3"
								/>
								<FormControlLabel
									label="Nor understandable nor not understanable"
									control={<Radio />}
									value="4"
								/>
								<FormControlLabel
									label="Slightly understandable"
									control={<Radio />}
									value="5"
								/>
								<FormControlLabel
									label="Moderately understandable"
									control={<Radio />}
									value="6"
								/>
								<FormControlLabel
									label="Extremely understandable"
									control={<Radio />}
									value="7"
								/>
							</RadioGroup>
						</FormControl>
					</Box>
				</Box>

				<Box flexDirection={"row"} sx={{ padding: 3, display: "flex" }}>
					<Box sx={{ maxWidth: "50%" }}>
						<FormControl required sx={{ padding: 3 }}>
							<FormLabel>
								5-1. How confident are you in identifying the specific range of
								values that labs report to determine a patient's normal
								condition?
							</FormLabel>
							<RadioGroup name="pre-5-1">
								<FormControlLabel
									label="Extremely unconfident"
									control={<Radio />}
									value="1"
								/>
								<FormControlLabel
									label="Moderately unconfident"
									control={<Radio />}
									value="2"
								/>
								<FormControlLabel
									label="Slightly unconfident"
									control={<Radio />}
									value="3"
								/>
								<FormControlLabel
									label="Nor confident nor unconfident"
									control={<Radio />}
									value="4"
								/>
								<FormControlLabel
									label="Slightly confident"
									control={<Radio />}
									value="5"
								/>
								<FormControlLabel
									label="Moderately confident"
									control={<Radio />}
									value="6"
								/>
								<FormControlLabel
									label="Extremely confident"
									control={<Radio />}
									value="7"
								/>
							</RadioGroup>
						</FormControl>
					</Box>
					<Box sx={{ maxWidth: "50%" }}>
						<FormControl required sx={{ padding: 3 }}>
							<FormLabel>
								5-2. Below is the description to help you identify labels. With
								this description, How well do you understand this description to
								annotate data associate with the <b>Lab value</b> field?
							</FormLabel>
							<Paper sx={{ m: 1 }} variant="outlined">
								<ul>
									<li>
										{" "}
										<Typography sx={{ fontSize: "18px" }}>
											Lab value : Reference values that labs admit as the range
											of status
										</Typography>
									</li>
									<ul>
										<li>
											<Typography>
												Example: 55 ng/mL, Positive, Negative{" "}
											</Typography>
										</li>
									</ul>
								</ul>
							</Paper>
							<RadioGroup name="pre-5-2">
								<FormControlLabel
									label="Extremely not understanable"
									control={<Radio />}
									value="1"
								/>
								<FormControlLabel
									label="Moderately not understanable"
									control={<Radio />}
									value="2"
								/>
								<FormControlLabel
									label="Slightly not understanable"
									control={<Radio />}
									value="3"
								/>
								<FormControlLabel
									label="Nor understandable nor not understanable"
									control={<Radio />}
									value="4"
								/>
								<FormControlLabel
									label="Slightly understandable"
									control={<Radio />}
									value="5"
								/>
								<FormControlLabel
									label="Moderately understandable"
									control={<Radio />}
									value="6"
								/>
								<FormControlLabel
									label="Extremely understandable"
									control={<Radio />}
									value="7"
								/>
							</RadioGroup>
						</FormControl>
					</Box>
				</Box>
				<Box flexDirection={"row"} sx={{ padding: 3, display: "flex" }}>
					<Box sx={{ maxWidth: "50%" }}>
						<FormControl required sx={{ padding: 3 }}>
							<FormLabel>
								6-1. How confident are you in identifying diagnostic procedures?
							</FormLabel>
							<RadioGroup name="pre-6-1">
								<FormControlLabel
									label="Extremely unconfident"
									control={<Radio />}
									value="1"
								/>
								<FormControlLabel
									label="Moderately unconfident"
									control={<Radio />}
									value="2"
								/>
								<FormControlLabel
									label="Slightly unconfident"
									control={<Radio />}
									value="3"
								/>
								<FormControlLabel
									label="Nor confident nor unconfident"
									control={<Radio />}
									value="4"
								/>
								<FormControlLabel
									label="Slightly confident"
									control={<Radio />}
									value="5"
								/>
								<FormControlLabel
									label="Moderately confident"
									control={<Radio />}
									value="6"
								/>
								<FormControlLabel
									label="Extremely confident"
									control={<Radio />}
									value="7"
								/>
							</RadioGroup>
						</FormControl>
					</Box>
					<Box sx={{ maxWidth: "50%" }}>
						<FormControl required sx={{ padding: 3 }}>
							<FormLabel>
								6-2. Below is the description to help you identify labels. How
								well do you understand this description to annotate data
								associate with <b>Diagnostic_procedure</b>?
							</FormLabel>
							<Paper sx={{ m: 1 }} variant="outlined">
								<ul>
									<li>
										{" "}
										<Typography sx={{ fontSize: "18px" }}>
											Diagnostic_procedure : Procedures performed by the
											clinician to make diagnosis decision.
										</Typography>
									</li>
									<ul>
										<li>
											<Typography>
												Example: CT of the maxillofacial area
											</Typography>
										</li>
									</ul>
								</ul>
							</Paper>
							<RadioGroup name="pre-6-2">
								<FormControlLabel
									label="Extremely not understanable"
									control={<Radio />}
									value="1"
								/>
								<FormControlLabel
									label="Moderately not understanable"
									control={<Radio />}
									value="2"
								/>
								<FormControlLabel
									label="Slightly not understanable"
									control={<Radio />}
									value="3"
								/>
								<FormControlLabel
									label="Nor understandable nor not understanable"
									control={<Radio />}
									value="4"
								/>
								<FormControlLabel
									label="Slightly understandable"
									control={<Radio />}
									value="5"
								/>
								<FormControlLabel
									label="Moderately understandable"
									control={<Radio />}
									value="6"
								/>
								<FormControlLabel
									label="Extremely understandable"
									control={<Radio />}
									value="7"
								/>
							</RadioGroup>
						</FormControl>
					</Box>
				</Box>
				<Box flexDirection={"row"} sx={{ padding: 3, display: "flex" }}>
					<Box sx={{ maxWidth: "50%" }}>
						<FormControl required sx={{ padding: 3 }}>
							<FormLabel>
								7-1. How confident are you in identifying medications that
								include its brand names, amount, dose, frequency, and mode only
								when used as modifiers?
							</FormLabel>
							<RadioGroup name="pre-7-1">
								<FormControlLabel
									label="Extremely unconfident"
									control={<Radio />}
									value="1"
								/>
								<FormControlLabel
									label="Moderately unconfident"
									control={<Radio />}
									value="2"
								/>
								<FormControlLabel
									label="Slightly unconfident"
									control={<Radio />}
									value="3"
								/>
								<FormControlLabel
									label="Nor confident nor unconfident"
									control={<Radio />}
									value="4"
								/>
								<FormControlLabel
									label="Slightly confident"
									control={<Radio />}
									value="5"
								/>
								<FormControlLabel
									label="Moderately confident"
									control={<Radio />}
									value="6"
								/>
								<FormControlLabel
									label="Extremely confident"
									control={<Radio />}
									value="7"
								/>
							</RadioGroup>
						</FormControl>
					</Box>
					<Box sx={{ maxWidth: "50%" }}>
						<FormControl required sx={{ padding: 3 }}>
							<FormLabel>
								7-2. Below is the description to help you identify labels. How
								well do you understand this description to annotate data
								associate with <b>Medication</b>?
							</FormLabel>
							<Paper sx={{ m: 1 }} variant="outlined">
								<ul>
									<li>
										{" "}
										<Typography sx={{ fontSize: "18px" }}>
											Medication : A list of medications that contains drugs and
											drug instructions. Medications that include its brand
											names, amount, dose, frequency, and mode only when used as
											modifiers
										</Typography>
									</li>
									<ul>
										<li>
											<Typography>
												Example: Lasix, regular sliding scale insulin, Plavix 75
												mg Tablet twice daily before meals
											</Typography>
										</li>
									</ul>
								</ul>
							</Paper>
							<RadioGroup name="pre-7-2">
								<FormControlLabel
									label="Extremely not understanable"
									control={<Radio />}
									value="1"
								/>
								<FormControlLabel
									label="Moderately not understanable"
									control={<Radio />}
									value="2"
								/>
								<FormControlLabel
									label="Slightly not understanable"
									control={<Radio />}
									value="3"
								/>
								<FormControlLabel
									label="Nor understandable nor not understanable"
									control={<Radio />}
									value="4"
								/>
								<FormControlLabel
									label="Slightly understandable"
									control={<Radio />}
									value="5"
								/>
								<FormControlLabel
									label="Moderately understandable"
									control={<Radio />}
									value="6"
								/>
								<FormControlLabel
									label="Extremely understandable"
									control={<Radio />}
									value="7"
								/>
							</RadioGroup>
						</FormControl>
					</Box>
				</Box>
				<Box flexDirection={"row"} sx={{ padding: 3, display: "flex" }}>
					<Box sx={{ maxWidth: "50%" }}>
						<FormControl required sx={{ padding: 3 }}>
							<FormLabel>
								8-1. How confident are you in{" "}
								<b>
									identifying events that patient undergo during a clinical
									study
								</b>
								?
							</FormLabel>
							<RadioGroup name="pre-8-1">
								<FormControlLabel
									label="Extremely unconfident"
									control={<Radio />}
									value="1"
								/>
								<FormControlLabel
									label="Moderately unconfident"
									control={<Radio />}
									value="2"
								/>
								<FormControlLabel
									label="Slightly unconfident"
									control={<Radio />}
									value="3"
								/>
								<FormControlLabel
									label="Nor confident nor unconfident"
									control={<Radio />}
									value="4"
								/>
								<FormControlLabel
									label="Slightly confident"
									control={<Radio />}
									value="5"
								/>
								<FormControlLabel
									label="Moderately confident"
									control={<Radio />}
									value="6"
								/>
								<FormControlLabel
									label="Extremely confident"
									control={<Radio />}
									value="7"
								/>
							</RadioGroup>
						</FormControl>
					</Box>
					<Box sx={{ maxWidth: "50%" }}>
						<FormControl required sx={{ padding: 3 }}>
							<FormLabel>
								8-2. Below is the description to help you identify labels. How
								well do you understand this description to annotate data
								associate with <b>Biological structure</b>?
							</FormLabel>
							<Paper sx={{ m: 1 }} variant="outlined">
								<ul>
									<li>
										{" "}
										<Typography sx={{ fontSize: "18px" }}>
											Biological structure :{" "}
										</Typography>
									</li>
									<ul>
										<li>
											<Typography>
												Example: a therapy, hospitalization, blood sampling
											</Typography>
										</li>
									</ul>
								</ul>
							</Paper>
							<RadioGroup name="pre-8-2">
								<FormControlLabel
									label="Extremely not understanable"
									control={<Radio />}
									value="1"
								/>
								<FormControlLabel
									label="Moderately not understanable"
									control={<Radio />}
									value="2"
								/>
								<FormControlLabel
									label="Slightly not understanable"
									control={<Radio />}
									value="3"
								/>
								<FormControlLabel
									label="Nor understandable nor not understanable"
									control={<Radio />}
									value="4"
								/>
								<FormControlLabel
									label="Slightly understandable"
									control={<Radio />}
									value="5"
								/>
								<FormControlLabel
									label="Moderately understandable"
									control={<Radio />}
									value="6"
								/>
								<FormControlLabel
									label="Extremely understandable"
									control={<Radio />}
									value="7"
								/>
							</RadioGroup>
						</FormControl>
					</Box>
				</Box>
				<Box flexDirection={"row"} sx={{ padding: 3, display: "flex" }}>
					<Box sx={{ maxWidth: "50%" }}>
						<FormControl required sx={{ padding: 3 }}>
							<FormLabel>
								9-1. How confident are you in recognizing disease / disorder
								names?
							</FormLabel>
							<RadioGroup name="pre-9-1">
								<FormControlLabel
									label="Extremely unconfident"
									control={<Radio />}
									value="1"
								/>
								<FormControlLabel
									label="Moderately unconfident"
									control={<Radio />}
									value="2"
								/>
								<FormControlLabel
									label="Slightly unconfident"
									control={<Radio />}
									value="3"
								/>
								<FormControlLabel
									label="Nor confident nor unconfident"
									control={<Radio />}
									value="4"
								/>
								<FormControlLabel
									label="Slightly confident"
									control={<Radio />}
									value="5"
								/>
								<FormControlLabel
									label="Moderately confident"
									control={<Radio />}
									value="6"
								/>
								<FormControlLabel
									label="Extremely confident"
									control={<Radio />}
									value="7"
								/>
							</RadioGroup>
						</FormControl>
					</Box>
					<Box sx={{ maxWidth: "50%" }}>
						<FormControl required sx={{ padding: 3 }}>
							<FormLabel>
								9-2. Below is the description to help you identify labels. How
								well do you understand this description to annotate data
								associate with disease disorders?
							</FormLabel>
							<Paper sx={{ m: 1 }} variant="outlined">
								<ul>
									<li>
										<Typography sx={{ fontSize: "18px" }}>
											Disease disorder : Disease caused by the organism or the
											specialization of disease on the patient species
										</Typography>
									</li>
									<ul>
										<li>
											<Typography>Example: facial bone fracture</Typography>
										</li>
									</ul>
								</ul>
							</Paper>
							<RadioGroup name="pre-9-2">
								<FormControlLabel
									label="Extremely not understanable"
									control={<Radio />}
									value="1"
								/>
								<FormControlLabel
									label="Moderately not understanable"
									control={<Radio />}
									value="2"
								/>
								<FormControlLabel
									label="Slightly not understanable"
									control={<Radio />}
									value="3"
								/>
								<FormControlLabel
									label="Nor understandable nor not understanable"
									control={<Radio />}
									value="4"
								/>
								<FormControlLabel
									label="Slightly understandable"
									control={<Radio />}
									value="5"
								/>
								<FormControlLabel
									label="Moderately understandable"
									control={<Radio />}
									value="6"
								/>
								<FormControlLabel
									label="Extremely understandable"
									control={<Radio />}
									value="7"
								/>
							</RadioGroup>
						</FormControl>
					</Box>
				</Box>

				{/* <FormControl required sx={{ padding: 3 }}>
					<FormLabel>
						4. How knowledgeable are you in identifying 7 classes below?
						<Paper sx={{ padding: 2 }} variant="outlined">
							<ul>
								<li>
									Clinical event: All those happenings of medical interest which
									patients undergo during a clinical study (e.g. a therapy, a
									blood sample or a hospitalization)
								</li>
								<li>
									Lab_value: Reference values that labs admit as the range of
									normal status
								</li>
								<li> Sign_sympton</li>
								<li> Diagnostic_procedure</li>
								<li> Medication</li>
								<li> Biological structure</li>
								<li> Disease_disorder</li>
							</ul>
						</Paper>
					</FormLabel>
					<RadioGroup name="radio-group-4">
						<FormControlLabel
							label="Not knowledgeable at all"
							control={<Radio />}
							value="1"
						/>
						<FormControlLabel
							label="Slightly knowledgeable"
							control={<Radio />}
							value="2"
						/>
						<FormControlLabel
							label="Moderately knowledgeable"
							control={<Radio />}
							value="3"
						/>
						<FormControlLabel
							label="Very knowledgeable"
							control={<Radio />}
							value="4"
						/>
						<FormControlLabel
							label="Extremly knowledgeable"
							control={<Radio />}
							value="5"
						/>
					</RadioGroup>
				</FormControl> */}
				<Button type="submit" variant="outlined" value="Submit">
					Submit
				</Button>
			</Box>
		</Container>
	);
};

export default Presurvey;
