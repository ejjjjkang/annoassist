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
							label="Once or twice a year"
							control={<Radio />}
							value="2"
						/>
						<FormControlLabel
							label="three or more times a year"
							control={<Radio />}
							value="3"
						/>
						<FormControlLabel
							label="Once a month"
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
						<FormControlLabel label="Everyday" control={<Radio />} value="7" />
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
							label="Once or twice a year"
							control={<Radio />}
							value="2"
						/>
						<FormControlLabel
							label="three or more times a year"
							control={<Radio />}
							value="3"
						/>
						<FormControlLabel
							label="Once a month"
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
						<FormControlLabel label="Everyday" control={<Radio />} value="7" />
					</RadioGroup>
				</FormControl>
				<Divider></Divider>
				<Typography variant="h6" sx={{ mt: 5 }}>
					3. Please read the instruction below, and answer 3-1 and 3-2
					questions.
				</Typography>
				<Paper sx={{ m: 1, p: 2 }} variant="outlined">
					<Typography variant="h5">
						<b>Symptom (sign)</b>
					</Typography>
					<Typography
						mt={2}
						mb={2}
						sx={{ fontSize: "18px", fontWeight: 600, color: "#0E7490" }}
					>
						Definition
					</Typography>
					<Typography sx={{ fontSize: "18px" }}>
						An objective evidence of diseases perceptible to a doctor and
						subjective evidence of disease perceived by a patient from the
						patient. Based on symptoms, doctors are able to judge patients'
						conditions or diseases.
					</Typography>
					<Typography
						mt={2}
						mb={2}
						sx={{ fontSize: "18px", fontWeight: 600, color: "#0E7490" }}
					>
						Annotation examples
					</Typography>
					<ul>
						<Typography sx={{ fontSize: "18px" }}>
							The patient has had increasing{" "}
							<span style={{ backgroundColor: "#CFFAFE" }}>
								dyspnea on exertion
							</span>
						</Typography>
					</ul>
					<ul>
						<Typography sx={{ fontSize: "18px" }}>
							<span style={{ backgroundColor: "#CFFAFE" }}>the wound</span> was
							noted to be clean with{" "}
							<span style={{ backgroundColor: "#CFFAFE" }}>
								mild serous drainage
							</span>
						</Typography>
					</ul>
				</Paper>
				<Box flexDirection={"row"} sx={{ padding: 3, display: "flex" }}>
					<Box sx={{ maxWidth: "50%" }}>
						<FormControl required sx={{ padding: 3 }}>
							<FormLabel>
								3-1. How clearly do you understand this instruction to annotate
								data associate with <b>symptoms and medical terminologies</b>?
							</FormLabel>

							<RadioGroup name="pre-3-1">
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
					<Box sx={{ maxWidth: "50%" }}>
						<FormControl required sx={{ padding: 3 }}>
							<FormLabel>
								3-2. Based on the instruction, how confident are you in
								annotating symptoms/signs or relevant terminologies in a
								document?
							</FormLabel>
							<RadioGroup name="pre-3-2">
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
				</Box>
				<Typography variant="h6" sx={{ mt: 5 }}>
					4. Please read the instruction below, and answer 4-1 and 4-2
					questions.
				</Typography>
				<Paper sx={{ m: 1, p: 2 }} variant="outlined">
					<Typography variant="h5">
						<b>Lab Value</b>
					</Typography>
					<Typography
						mt={2}
						mb={2}
						sx={{ fontSize: "18px", fontWeight: 600, color: "#0E7490" }}
					>
						Definition
					</Typography>
					<Typography sx={{ fontSize: "18px" }}>
						The value obtained from various laboratory tests conducted on
						samples such as blood, urine, or tissue. It is used by a doctor to
						diagnose and monitor medical conditions, assess overall health
						conditions, and guide treatment decisions.
					</Typography>
					<Typography
						mt={2}
						mb={2}
						sx={{ fontSize: "18px", fontWeight: 600, color: "#0E7490" }}
					>
						Annotation examples
					</Typography>
					<ul>
						<Typography sx={{ fontSize: "18px" }}>
							White blood cell
							<span style={{ backgroundColor: "#CFFAFE" }}>3.0</span>,
							hemoglobin{" "}
							<span style={{ backgroundColor: "#CFFAFE" }}>13.9,</span>, and
							lymphocytes <span style={{ backgroundColor: "#CFFAFE" }}>48</span>
						</Typography>
					</ul>
				</Paper>
				<Box flexDirection={"row"} sx={{ padding: 3, display: "flex" }}>
					<Box sx={{ maxWidth: "50%" }}>
						<FormControl required sx={{ padding: 3 }}>
							<FormLabel>
								4-1. How clearly do you understand this instruction to annotate
								data associate with <b>Lab value</b>?
							</FormLabel>
							<RadioGroup name="pre-4-1">
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
					<Box sx={{ maxWidth: "50%" }}>
						<FormControl required sx={{ padding: 3 }}>
							<FormLabel>
								4-2. Based on the instruction above, how confident are you in
								annotating <b>lab value</b> fields in a document?
							</FormLabel>

							<RadioGroup name="pre-4-2">
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
				</Box>
				<Typography variant="h6" sx={{ mt: 5 }}>
					5. Please read the instruction below, and answer 5-1 and 5-2
					questions.
				</Typography>
				<Paper sx={{ m: 1, p: 2 }} variant="outlined">
					<Typography variant="h5">
						<b>Diagnostic_procedure</b>
					</Typography>
					<Typography
						mt={2}
						mb={2}
						sx={{ fontSize: "18px", fontWeight: 600, color: "#0E7490" }}
					>
						Definition
					</Typography>
					<Typography sx={{ fontSize: "18px" }}>
						A test used to help figure out what disease or condition a person
						has based on their signs and symptoms. It may also be used to help
						plan treatment, find out how well treatment is working, and make a
						prognosis.
					</Typography>
					<Typography
						mt={2}
						mb={2}
						sx={{ fontSize: "18px", fontWeight: 600, color: "#0E7490" }}
					>
						Annotation examples
					</Typography>
					<ul>
						<Typography sx={{ fontSize: "18px" }}>
							There is drainage of pus and hence{" "}
							<span style={{ backgroundColor: "#CFFAFE" }}>drainage</span> was
							performed.
						</Typography>
					</ul>
				</Paper>
				<Box flexDirection={"row"} sx={{ padding: 3, display: "flex" }}>
					<Box sx={{ maxWidth: "50%" }}>
						<FormControl required sx={{ padding: 3 }}>
							<FormLabel>
								5-1. How clearly do you understand this instruction to annotate
								data associate with <b>Diagnostic procedure</b>?
							</FormLabel>
							<RadioGroup name="pre-5-1">
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
					<Box sx={{ maxWidth: "50%" }}>
						<FormControl required sx={{ padding: 3 }}>
							<FormLabel>
								5-2. Based on the instruction above, how confident are you in
								annotating <b>Diagnostic procedure</b> fields in a document?
							</FormLabel>

							<RadioGroup name="pre-5-2">
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
				</Box>
				<Typography variant="h6" sx={{ mt: 5 }}>
					6. Please read the instruction below, and answer 6-1 and 6-2
					questions.
				</Typography>
				<Paper sx={{ m: 1, p: 2 }} variant="outlined">
					<Typography variant="h5">
						<b>Medication</b>
					</Typography>
					<Typography
						mt={2}
						mb={2}
						sx={{ fontSize: "18px", fontWeight: 600, color: "#0E7490" }}
					>
						Definition
					</Typography>
					<Typography sx={{ fontSize: "18px" }}>
						A list of medications that contains drugs, drug instructions, or
						other preparations.
					</Typography>
					<Typography
						mt={2}
						mb={2}
						sx={{ fontSize: "18px", fontWeight: 600, color: "#0E7490" }}
					>
						Annotation examples
					</Typography>
					<ul>
						<Typography sx={{ fontSize: "18px" }}>
							<span style={{ backgroundColor: "#CFFAFE" }}>Fluticasone</span>/
							<span style={{ backgroundColor: "#CFFAFE" }}>vilanterol</span> is
							a combination drug and its trade name is Breo Ellipta. dyspnea on
							exertion
						</Typography>
					</ul>
				</Paper>
				<Box flexDirection={"row"} sx={{ padding: 3, display: "flex" }}>
					<Box sx={{ maxWidth: "50%" }}>
						<FormControl required sx={{ padding: 3 }}>
							<FormLabel>
								6-1. How clearly do you understand this instruction to annotate
								data associate with <b>Medication</b> ?
							</FormLabel>
							<RadioGroup name="pre-6-1">
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
					<Box sx={{ maxWidth: "50%" }}>
						<FormControl required sx={{ padding: 3 }}>
							<FormLabel>
								6-2. Based on the instruction above, how confident are you in
								annotating <b>Medication</b> in a document?
							</FormLabel>

							<RadioGroup name="pre-6-2">
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
				</Box>
				<Typography variant="h6" sx={{ mt: 5 }}>
					7. Please read the description below, and answer 7-1 and 7-2
					questions.
				</Typography>
				<Paper sx={{ m: 1, p: 2 }} variant="outlined">
					<Typography variant="h5">
						<b>Biological Structures</b>
					</Typography>
					<Typography
						mt={2}
						mb={2}
						sx={{ fontSize: "18px", fontWeight: 600, color: "#0E7490" }}
					>
						Definition
					</Typography>
					<Typography sx={{ fontSize: "18px" }}>
						Biological structures are organs (such as the brain) and systems
						(such as the nervous system) that influence human behavior. These
						can include tissues, cells, organisms that reside within the body
						and even complete organs.
					</Typography>
					<Typography
						mt={2}
						mb={2}
						sx={{ fontSize: "18px", fontWeight: 600, color: "#0E7490" }}
					>
						Annotation examples
					</Typography>
					<ul>
						<Typography sx={{ fontSize: "18px" }}>
							Small lymph nodes are diffused in the{" "}
							<span style={{ backgroundColor: "#CFFAFE" }}>right lung</span>
						</Typography>
					</ul>
					<ul>
						<Typography sx={{ fontSize: "18px" }}>
							The patient has{" "}
							<span style={{ backgroundColor: "#CFFAFE" }}>chest</span> and{" "}
							<span style={{ backgroundColor: "#CFFAFE" }}>abdominal</span> pain
						</Typography>
					</ul>
				</Paper>
				<Box flexDirection={"row"} sx={{ padding: 3, display: "flex" }}>
					<Box sx={{ maxWidth: "50%" }}>
						<FormControl required sx={{ padding: 3 }}>
							<FormLabel>
								7-1. How clearly do you understand this instruction to annotate
								data associate with <b>Biological Structures</b>?
							</FormLabel>
							<RadioGroup name="pre-7-1">
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
					<Box sx={{ maxWidth: "50%" }}>
						<FormControl required sx={{ padding: 3 }}>
							<FormLabel>
								7-2. Based on the instruction above, how confident are you in
								annotating <b>Biological structures</b> in a document?
							</FormLabel>

							<RadioGroup name="pre-7-2">
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
				</Box>
				<Typography variant="h6" sx={{ mt: 5 }}>
					8. Please read the instruction below, and answer 8-1 and 8-2
					questions.
				</Typography>
				<Paper sx={{ m: 1, p: 2 }} variant="outlined">
					<Typography variant="h5">
						<b>Clinical event</b>
					</Typography>
					<Typography
						mt={2}
						mb={2}
						sx={{ fontSize: "18px", fontWeight: 600, color: "#0E7490" }}
					>
						Definition
					</Typography>
					<Typography sx={{ fontSize: "18px" }}>
						All those happenings of medical interest which patients undergo
						during a clinical study.
					</Typography>
					<Typography
						mt={2}
						mb={2}
						sx={{ fontSize: "18px", fontWeight: 600, color: "#0E7490" }}
					>
						Annotation examples
					</Typography>
					<ul>
						<Typography sx={{ fontSize: "18px" }}>
							He underwent{" "}
							<span style={{ backgroundColor: "#CFFAFE" }}>
								nephrostomy tube placement
							</span>
							. The nephrostomy tube was removed the next day
						</Typography>
					</ul>
					<ul>
						<Typography sx={{ fontSize: "18px" }}>
							his cancer, her medications,{" "}
							<span style={{ backgroundColor: "#CFFAFE" }}>
								the patient’s surgery
							</span>
							,{" "}
							<span style={{ backgroundColor: "#CFFAFE" }}>
								an appendectomy
							</span>
							, the patient’s tumor.
						</Typography>
					</ul>
				</Paper>
				<Box flexDirection={"row"} sx={{ padding: 3, display: "flex" }}>
					<Box sx={{ maxWidth: "50%" }}>
						<FormControl required sx={{ padding: 3 }}>
							<FormLabel>
								8-1. How clearly do you understand this instruction to annotate
								data associate with <b>Clinical events</b>?
							</FormLabel>
							<RadioGroup name="pre-8-1">
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
					<Box sx={{ maxWidth: "50%" }}>
						<FormControl required sx={{ padding: 3 }}>
							<FormLabel>
								8-2. Based on the instruction above, how confident are you in
								annotating <b>Clinical events</b> in a document??
							</FormLabel>

							<RadioGroup name="pre-8-2">
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
				</Box>
				<Typography variant="h6" sx={{ mt: 5 }}>
					9. Please read the instruction below, and answer 9-1 and 9-2
					questions.
				</Typography>
				<Paper sx={{ m: 1, p: 2 }} variant="outlined">
					<Typography variant="h5">
						<b>Disease disorder</b>
					</Typography>
					<Typography
						mt={2}
						mb={2}
						sx={{ fontSize: "18px", fontWeight: 600, color: "#0E7490" }}
					>
						Definition
					</Typography>
					<Typography sx={{ fontSize: "18px" }}>
						An abnormal condition of a part, organ, or system of an organism
						resulting from various causes, such as infection, inflammation,
						environmental factors, or genetic defect, and characterized by an
						identifiable group of signs, symptoms, or both.
					</Typography>
					<Typography
						mt={2}
						mb={2}
						sx={{ fontSize: "18px", fontWeight: 600, color: "#0E7490" }}
					>
						Annotation examples
					</Typography>
					<ul>
						<Typography sx={{ fontSize: "18px" }}>
							<span style={{ backgroundColor: "#CFFAFE" }}>his cancer</span>,
							her medications, the patient’s surgery, an appendectomy, the
							patient’s tumor.
						</Typography>
					</ul>
					<ul>
						<Typography sx={{ fontSize: "18px" }}>
							Patient was suffering from lung{" "}
							<span style={{ backgroundColor: "#CFFAFE" }}>cancer</span>
						</Typography>
					</ul>
				</Paper>
				<Box flexDirection={"row"} sx={{ padding: 3, display: "flex" }}>
					<Box sx={{ maxWidth: "50%" }}>
						<FormControl required sx={{ padding: 3 }}>
							<FormLabel>
								9-1. How clearly do you understand this instruction to annotate
								data associate with <b>Disease / disorder</b>
							</FormLabel>
							<RadioGroup name="pre-9-1">
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
					<Box sx={{ maxWidth: "50%" }}>
						<FormControl required sx={{ padding: 3 }}>
							<FormLabel>
								9-2. Based on the instruction above, how confident are you in
								annotating <b>Disease / disorder</b> in a document?
							</FormLabel>

							<RadioGroup name="pre-9-2">
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
				</Box>

				<Button type="submit" variant="outlined" value="Submit">
					Submit
				</Button>
			</Box>
		</Container>
	);
};

export default Presurvey;
