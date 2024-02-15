import { SyntheticEvent, ChangeEvent, useEffect, useState } from "react";
import {
	FormControl,
	FormControlLabel,
	RadioGroup,
	Radio,
	FormLabel,
	Button,
	Box,
	TextField,
	Typography,
	Container,
	InputLabel,
	Paper,
	Divider,
	Input,
} from "@mui/material";

interface FormContent {
	"post-1": string;
	"post-2": string;
	"post-3": string;
	"post-4": string;
	"post-5": string;
	"post-6": string;
	"post-7": string;
	"post-8": string;
	"post-9": string;
	"post-10": string;
	"post-11": string;
	"text-answer": TextContent;
}
interface TextContent {
	age: string;
	q1: string;
	q2: string;
	q3: string;
}

const PostSurvey = () => {
	const [data, setData] = useState<FormContent>();
	const [textValues, setTextValues] = useState<TextContent>({
		age: "",
		q1: "",
		q2: "",
		q3: "",
	});

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		setTextValues({
			...textValues,
			[name]: value,
		});
	};

	const handleSubmit = (e: SyntheticEvent) => {
		e.preventDefault();
		const target = e.target as typeof e.target & {
			"post-1": { value: string };
			"post-2": { value: string };
			"post-3": { value: string };
			"post-4": { value: string };
			"post-5": { value: string };
			"post-6": { value: string };
			"post-7": { value: string };
			"post-8": { value: string };
			"post-9": { value: string };
			"post-10": { value: string };
			"post-11": { value: string };
		};

		setData({
			"post-1": target["post-1"].value,
			"post-2": target["post-2"].value,
			"post-3": target["post-3"].value,
			"post-4": target["post-4"].value,
			"post-5": target["post-5"].value,
			"post-6": target["post-6"].value,
			"post-7": target["post-7"].value,
			"post-8": target["post-8"].value,
			"post-9": target["post-9"].value,
			"post-10": target["post-10"].value,
			"post-11": target["post-11"].value,
			"text-answer": textValues,
		});
	};

	useEffect(() => {
		//fetch data
		console.log(textValues);
		console.log(data);
	}, [data]);

	return (
		<Container>
			<Typography align="center" variant="h5" sx={{ m: 5 }}>
				Thank you for completing the tasks. <br /> To better understand your
				experience of the tasks, <br /> please answer the following questions
				based on your reflection.
			</Typography>
			<Box
				component="form"
				onSubmit={handleSubmit}
				sx={{ display: "flex", flexDirection: "column" }}
			>
				<FormControl sx={{ padding: 3 }}>
					<FormLabel required>
						How confident are you in correctly annotating data to match with
						true labels?
					</FormLabel>
					<RadioGroup name="post-1">
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
					<TextField placeholder="Could you explain why you gave that answer?"></TextField>
				</FormControl>
				<Box flexDirection={"row"} sx={{ padding: 3, display: "flex" }}>
					<Box sx={{ maxWidth: "50%" }}>
						<FormControl required sx={{ padding: 3 }}>
							<FormLabel>
								How confident are you <b>now</b> in your ability to recognize
								medical symptoms and relevant terminology?
							</FormLabel>
							<RadioGroup name="post-2-1">
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
								How would you rate your understanding on descriptions for
								annotation work below?
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
							<RadioGroup name="post-2-2">
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
								How would you rate your ability confidently in recognizing
								events that patient undergo during a clinical study?
							</FormLabel>
							<RadioGroup name="post-3-1">
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
								How would you rate your understanding on descriptions for
								annotation work below?
							</FormLabel>
							<Paper sx={{ m: 1 }} variant="outlined">
								<ul>
									<li>
										{" "}
										<Typography sx={{ fontSize: "18px" }}>
											Clinical event: All those happenings of medical interest
											which patients undergo during a clinical study
										</Typography>
									</li>
									<ul>
										<li>
											<Typography sx={{ fontSize: "18px" }}>
												{" "}
												Example: a therapy, hospitalization, blood sampling
											</Typography>
										</li>
									</ul>
								</ul>
							</Paper>
							<RadioGroup name="post-3-2">
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
								5. How confident are you in identifying diagnostic procedures?
							</FormLabel>
							<RadioGroup name="post-4-1">
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
								How would you rate your understanding on descriptions for
								annotation work below?
							</FormLabel>
							<Paper sx={{ m: 1 }} variant="outlined">
								<ul>
									<li>
										{" "}
										<Typography sx={{ fontSize: "18px" }}>
											Diagnostic_procedure : Procedures performed by the
											clinician to make diagnosis decisions.
										</Typography>
									</li>
									<ul>
										<li>
											<Typography sx={{ fontSize: "18px" }}>
												{" "}
												Example: CT of the maxillofacial area
											</Typography>
										</li>
									</ul>
								</ul>
							</Paper>
							<RadioGroup name="post-4-2">
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
								How would you rate your ability confidently in identifying the
								specific range of values that labs report to determine a
								patient's normal condition?
							</FormLabel>
							<RadioGroup name="post-5-1">
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
								How would you rate your understanding on descriptions for
								annotation work below?
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
											<Typography sx={{ fontSize: "18px" }}>
												{" "}
												Example: 55 ng/mL, Positive, Negative
											</Typography>
										</li>
									</ul>
								</ul>
							</Paper>
							<RadioGroup name="post-5-2">
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
								How would you rate your confidence to identify medications that
								include its brand names, amount, dose, frequency, and mode only
								when used as modifiers?
							</FormLabel>
							<RadioGroup name="post-6-1">
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
								How would you rate your understanding on descriptions for
								annotation work below?
							</FormLabel>
							<Paper sx={{ m: 1 }} variant="outlined">
								<ul>
									<li>
										{" "}
										<Typography sx={{ fontSize: "18px" }}>
											Medication: A list of medications that contains drugs and
											drug instructions. Medications that include its brand
											names, amount, dose, frequency, and mode only when used as
											modifiers
										</Typography>
									</li>
									<ul>
										<li>
											<Typography sx={{ fontSize: "18px" }}>
												{" "}
												Example: Lasix, regular sliding scale insulin, Plavix 75
												mg, Tablet twice daily before meals
											</Typography>
										</li>
									</ul>
								</ul>
							</Paper>
							<RadioGroup name="post-6-2">
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
								How would you rate your confidence to identify disease and
								disorder?
							</FormLabel>
							<RadioGroup name="post-7-1">
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
								How would you rate your understanding on descriptions for
								annotation work below?
							</FormLabel>
							<Paper sx={{ m: 1 }} variant="outlined">
								<ul>
									<li>
										{" "}
										<Typography sx={{ fontSize: "18px" }}>
											Disease disorder : Disease caused by the organism or the
											specialization of disease on the patient species
										</Typography>
									</li>
									<ul>
										<li>
											<Typography sx={{ fontSize: "18px" }}>
												{" "}
												Example: facial bone fracture
											</Typography>
										</li>
									</ul>
								</ul>
							</Paper>
							<RadioGroup name="post-7-2">
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
								5. How confident are you in your ability to identify biological
								structure?
							</FormLabel>
							<RadioGroup name="post-8-1">
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
							<FormLabel>biological structure</FormLabel>
							<Paper sx={{ m: 1 }} variant="outlined">
								<ul>
									<li>
										{" "}
										<Typography sx={{ fontSize: "18px" }}>
											Disease disorder : Disease caused by the organism or the
											specialization of disease on the patient species
										</Typography>
									</li>
									<ul>
										<li>
											<Typography sx={{ fontSize: "18px" }}>
												{" "}
												Example: facial bone fracture
											</Typography>
										</li>
									</ul>
								</ul>
							</Paper>
							<RadioGroup name="post-8-2">
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

				<FormControl sx={{ padding: 3 }}>
					<FormLabel required>
						Did you find the system, which uses AI to suggest possible labels,
						helpful in completing the annotation tasks?
					</FormLabel>
					<RadioGroup name="post-9">
						<FormControlLabel
							label="Extremely unhelpful"
							control={<Radio />}
							value="1"
						/>
						<FormControlLabel
							label="Moderately unhelpful"
							control={<Radio />}
							value="2"
						/>
						<FormControlLabel
							label="Slightly unhelpful"
							control={<Radio />}
							value="3"
						/>
						<FormControlLabel
							label="Neither unhelpful nor helpful"
							control={<Radio />}
							value="4"
						/>
						<FormControlLabel
							label="Slightly helpful"
							control={<Radio />}
							value="5"
						/>
						<FormControlLabel
							label="Moderately helpful"
							control={<Radio />}
							value="6"
						/>
						<FormControlLabel
							label="Extremly helpful"
							control={<Radio />}
							value="7"
						/>
					</RadioGroup>
					<TextField placeholder="Could you explain why you gave that answer?"></TextField>
				</FormControl>
				<FormControl sx={{ padding: 3 }}>
					<FormLabel required>
						Did you find the instruction, which describes meaning and examples
						of each label, helpful in completing the annotation tasks?
					</FormLabel>
					<RadioGroup name="post-10">
						<FormControlLabel
							label="Extremely unhelpful"
							control={<Radio />}
							value="1"
						/>
						<FormControlLabel
							label="Moderately unhelpful"
							control={<Radio />}
							value="2"
						/>
						<FormControlLabel
							label="Slightly unhelpful"
							control={<Radio />}
							value="3"
						/>
						<FormControlLabel
							label="Neither unhelpful nor helpful"
							control={<Radio />}
							value="4"
						/>
						<FormControlLabel
							label="Slightly helpful"
							control={<Radio />}
							value="5"
						/>
						<FormControlLabel
							label="Moderately helpful"
							control={<Radio />}
							value="6"
						/>
						<FormControlLabel
							label="Extremly helpful"
							control={<Radio />}
							value="7"
						/>
					</RadioGroup>
					<TextField placeholder="Could you explain why you gave that answer?"></TextField>
				</FormControl>

				<FormControl required sx={{ padding: 3 }}>
					<Typography variant="h6">
						Can you explain general strategies that you made to efficiently and
						correctly annotate data throughout the tasks?
					</Typography>
					<TextField
						margin="normal"
						required
						fullWidth
						multiline
						rows={4}
						type="text"
						name="q1"
						value={textValues?.q1}
						onChange={handleChange}
					/>
				</FormControl>
				<FormControl required sx={{ padding: 3 }}>
					<Typography variant="h6">
						Do you have any challenges or difficulties in completing the tasks?
					</Typography>
					<TextField
						margin="normal"
						required
						fullWidth
						multiline
						rows={4}
						type="text"
						name="q2"
						value={textValues?.q2}
						onChange={handleChange}
					/>
				</FormControl>
				<FormControl required sx={{ padding: 3 }}>
					<Typography variant="h6">
						What additional information or interaction features that support
						system you wish to know or that would have helped you make better
						decisions in tasks?
					</Typography>
					<TextField
						required
						fullWidth
						margin="normal"
						multiline
						rows={4}
						type="text"
						name="q3"
						value={textValues?.q3}
						onChange={handleChange}
					/>
				</FormControl>

				<FormControl required sx={{ padding: 3 }}>
					<InputLabel required>What is your age?</InputLabel>
					<Input
						type="text"
						value={textValues?.age}
						name="age"
						onChange={handleChange}
					></Input>
				</FormControl>
				<FormControl required sx={{ padding: 3 }}>
					<FormLabel>What is your gender?</FormLabel>
					<RadioGroup name="post-11">
						<FormControlLabel
							label="Female"
							control={<Radio />}
							value="Female"
						/>
						<FormControlLabel label="Male" control={<Radio />} value="Male" />
						<FormControlLabel
							label={<Input placeholder="Others" />}
							control={<Radio />}
							value="Other (specify)"
						/>
						<FormControlLabel
							label="Prefer not to say"
							control={<Radio />}
							value="Prefer not to say"
						/>
					</RadioGroup>
				</FormControl>

				<FormControl required sx={{ padding: 3 }}>
					<FormLabel>
						What is the highest level of school you have completed or the
						highest degree you have received?
					</FormLabel>
					<RadioGroup name="radio-group-1">
						<FormControlLabel
							label="Less than high school degree"
							control={<Radio />}
							value="1"
						/>
						<FormControlLabel
							label="High school degree or equivalent (e.g., GED)"
							control={<Radio />}
							value="2"
						/>

						<FormControlLabel
							label="Some college but no degree"
							control={<Radio />}
							value="3"
						/>
						<FormControlLabel
							label="Associate degree"
							control={<Radio />}
							value="4"
						/>
						<FormControlLabel
							label="Bachelor degree"
							control={<Radio />}
							value="5"
						/>
						<FormControlLabel
							label="Graduate degree"
							control={<Radio />}
							value="6"
						/>
					</RadioGroup>
				</FormControl>
				<Button type="submit" variant="outlined" value="Submit">
					Submit
				</Button>
			</Box>
		</Container>
	);
};

export default PostSurvey;
